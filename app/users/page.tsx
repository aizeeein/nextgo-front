"use client";

import { useEffect, useState } from "react";
import CreateUserForm from "./create-user";
import UserCard from "@/components/user-card";

interface User {
  id: string;
  name: string;
  email: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const fetchUsers = async () => {
    const res = await fetch("http://localhost:8080/users");

    if (res.ok) {
      const data = await res.json();
      setUsers(data);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [users]);

  const handleEdit = (user: User) => {
    setEditingUser(user);
  };

  const handleDelete = async (id: string) => {
    const res = await fetch(`http://localhost:8080/users/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      setUsers(users.filter((user) => user.id != user.id));
    } else {
      alert("Failed to delete user");
    }
  };

  const handleFormSuccess = () => {
    fetchUsers();
    setEditingUser(null);
  };

  return (
    <div className="p-4 flex flex-col space-y-4">
      <div className="border-2 p-2 flex items-center justify-center">
        <CreateUserForm user={editingUser} onSuccess={handleFormSuccess} />
      </div>
      {users.map((user, index) => (
        <div key={user.id}>
          <UserCard
            user={user}
            index={index}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </div>
      ))}
    </div>
  );
}
