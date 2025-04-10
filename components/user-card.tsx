"use client";
import React from "react";
import { Button } from "./ui/button";

interface User {
  id: string;
  name: string;
  email: string;
}

interface UserCardProps {
  user: User;
  onDelete: (id: string) => void;
  onEdit: (user: User) => void;
  index: number;
}

function UserCard({ user, onDelete, onEdit, index }: UserCardProps) {
  return (
    <div className="border-2 border-gray-300 p-4 flex flex-row justify-between">
      <div className="rounded-xl flex space-y-2" key={user.id}>
        <p>{index + 1}.</p>
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Id: {user.id}</p>
        </div>
      </div>
      <div className="flex space-x-2">
        <Button
          className="hover:bg-green-600/80 hover:text-white"
          variant={"link"}
          onClick={() => onEdit(user)}
        >
          Edit
        </Button>
        <Button
          className="hover:bg-destructive/70"
          variant={"destructive"}
          onClick={() => onDelete(user.id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default UserCard;
