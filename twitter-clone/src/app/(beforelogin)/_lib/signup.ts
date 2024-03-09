"use server";

import { redirect } from "next/navigation";

export default async (prevState: {message: string | undefined}, formData: FormData) => {
  if (!formData.get("id") || !(formData.get("id") as string)?.trim() ) {
    return { message: "no_id" };
  }
  if (!formData.get("name") || !(formData.get("name") as string)?.trim()) {
    return { message: "no_name" };
  }
  if (!formData.get("password") || !(formData.get("password") as string)?.trim()) {
    return { message: "no_password" };
  }
  if (!formData.get("image")) {
    return { message: "no_image" };
  }
  let f = false;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
      {
        method: "post",
        body: formData,
        credentials: "include",
      }
    );
    console.log(response.status);
    if (response.status === 403) {
      return { message: "user_exist" };
    }
    //console.log(await response.json())
    f = true;
  } catch (err) {
    console.error(err);
    return;
  }
  if (f) redirect("/home");
};
