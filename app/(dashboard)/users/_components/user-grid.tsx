// app/(dashboard)/users/_components/user-grid.tsx
"use client";

import { useState } from "react";

import { User } from "@/types/user";
import GridUserCard from "@/app/(dashboard)/users/_components/grid-user-card";
import CreateUserDialog from "./create-user-dialog";

export default function UserGrid({ initialUsers }: { initialUsers: User[] }) {
  const [users, setUsers] = useState<User[]>(initialUsers);

  const handleDelete = async (id: string) => {
    const res = await fetch(`http://localhost:8080/users/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setUsers(users.filter((user) => user.id !== id));
    } else {
      alert("Failed to delete user");
    }
  };

  const handleUserCreated = (newUser: User) => {
    setUsers([...users, newUser]);
  };

  return (
    <>
      <div className="flex justify-end mb-4">
        <CreateUserDialog onUserCreated={handleUserCreated} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6">
        {users.map((user, index) => (
          <GridUserCard
            key={user.id}
            user={user}
            index={index}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </>
  );
}
