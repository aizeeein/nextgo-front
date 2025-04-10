"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
}

interface CreateUserFormProps {
  user: User | null;
  onSuccess: () => void;
}

export default function CreateUserForm({
  user,
  onSuccess,
}: CreateUserFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (user) {
      setForm({ name: user.name, email: user.email, password: "" });
    } else {
      setForm({ name: "", email: "", password: "" });
    }
  }, [user]);

  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const endpoint = user
      ? `http://localhost:8080/users/${user.id}`
      : "http://localhost:8080/users";

    const method = user ? "PUT" : "POST";

    setMessage("");

    const res = await fetch(endpoint, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      onSuccess();
    } else {
      const errorText = await res.text();
      setMessage(`Error: ${errorText}`);
    }
  };

  return (
    <div className="p-2">
      <h2 className="pb-2">Create User</h2>
      <form onSubmit={handleSubmit} className="">
        <input
          className="border-2 rounded-lg p-2 ml-2"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className="border-2 rounded-lg p-2 ml-2"
          name="email"
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          className="border-2 rounded-lg p-2 ml-2"
          name="password"
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <Button type="submit" className="ml-2">
          Create
        </Button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
