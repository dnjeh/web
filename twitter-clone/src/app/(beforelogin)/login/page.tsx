"use client"
import { useRouter } from "next/navigation";
import MainPage from "../_component/MainPage";
import { useSession } from "next-auth/react";
export default function Login() {
  const router = useRouter();
  const {data: session} = useSession();

  if(session?.user) {
    router.replace("/home");
    return null;
  }
  router.replace("/i/flow/login");
  return (
    <MainPage/>
  )
}

