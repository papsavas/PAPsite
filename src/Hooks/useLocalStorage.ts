import { useState } from "react";

const useLocalStorage = <T extends string>(key: string, initialValue: T) => {
    const [storedValue, setStoredValue] = useState<T>(() => {
        if (typeof window === "undefined") {
            return initialValue;
        }
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    });

    const setValue = (value: T | ((stateParam: any) => T)) => {
        try {
            const valueToStore =
                value instanceof Function ? value(storedValue) : value; //!Expand to callback usage
            setStoredValue(valueToStore);
            if (typeof window !== "undefined") {
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            }
        } catch (error) {
            console.error(error);
        }
    };
    return [storedValue, setValue] as const;
}

export default useLocalStorage;