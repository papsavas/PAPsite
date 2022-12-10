export default function BackNav() {
  const router = useRouter();
  const navigate = () => router.back();
  return (
    <div style={{ cursor: "pointer" }} onClick={navigate}>
      Back
    </div>
  );
}
