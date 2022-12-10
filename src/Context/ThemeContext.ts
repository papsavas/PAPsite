"use client"
import { createContext } from "react";
import { ThemeContextType } from './../types.ts/theme';


export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);


