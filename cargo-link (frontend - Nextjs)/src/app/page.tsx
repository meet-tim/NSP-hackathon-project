"use client"
// import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  router.push("/dashboard")
  return (
    <main className="">
      {/* <LoginLink>Sign in</LoginLink>

      <RegisterLink>Sign up</RegisterLink> */}
    </main>
  );
}
