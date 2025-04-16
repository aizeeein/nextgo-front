"use client";
import React from "react";
import { Button } from "./ui/button";
import EditUserDialog from "@/app/(dashboard)/users/_components/edit-user-dialog";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import DeleteUser from "@/actions/deleteUser";
import { toast } from "sonner";

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

interface UserCardProps {
  user: User;
  // onDelete: (id: string) => void;
  // onEdit: (user: User) => void;
  index: number;
}

function UserCard({
  user,
  // onDelete,
  // onEdit,
  index,
}: UserCardProps) {
  const queryClient = useQueryClient();
  const deleteMutation = useMutation({
    mutationFn: DeleteUser,
    onSuccess: () => {
      toast.success("User deleted", { id: "delete-user" });
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: () => {
      toast.error("Failed to delete user", { id: "delete-user" });
    },
  });

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
        <EditUserDialog user={user} />

        <Button
          className="hover:bg-destructive/70"
          variant={"destructive"}
          onClick={() =>            
            deleteMutation.mutate({              
              endpoint: `http://localhost:8080/users/${user.id}`,
            })
          }
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default UserCard;
