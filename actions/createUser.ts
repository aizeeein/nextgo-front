"use server";

import { createUserSchemaType } from "@/schema/user";
import { revalidatePath } from "next/cache";

interface CreateUserProps {
  endpoint: string;
  method: string;
  form: createUserSchemaType;
}
async function CreateUser({ endpoint, method, form }: CreateUserProps) {
  const res = await fetch(endpoint, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  if (!res.ok) {
    throw new Error("Failed to send request");
  }

  revalidatePath("/users");
  return res.json();
}

export default CreateUser;
