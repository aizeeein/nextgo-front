"use server";

import { editUserSchemaType } from "@/schema/user";
import { revalidatePath } from "next/cache";

interface EditUserProps {
  endpoint: string;
  method: string;
  form: editUserSchemaType;
}

async function EditUser({ endpoint, method, form }: EditUserProps) {
  const res = await fetch(endpoint, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });
  if (!res.ok) {
    throw new Error("Failed to edit user data");
  }

  revalidatePath("/users");
  return res.json();
}

export default EditUser;
