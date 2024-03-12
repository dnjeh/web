import { auth } from "@/auth";
import MainPage from "./_component/MainPage";
import { redirect } from "next/navigation";

export default async function Main() {
  const session = await auth();
  if(session?.user) {
    redirect("/home");
    return null;
  }
  return <MainPage />
}
