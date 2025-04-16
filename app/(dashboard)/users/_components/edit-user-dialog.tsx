"use client";

import React, { useCallback, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "@/types/user";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  createUserSchema,
  editUserSchema,
  editUserSchemaType,
} from "@/schema/user";
import { createUserSchemaType } from "../../../../schema/user";
import { Input } from "@/components/ui/input";
import { EyeClosedIcon, EyeIcon } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import EditUser from "@/actions/editUser";
import { toast } from "sonner";

function EditUserDialog({ user }: { user: User }) {
  const [showPassword, setShowPassword] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const form = useForm<editUserSchemaType>({
    resolver: zodResolver(editUserSchema),
    defaultValues: {
      name: user.name,
      email: user.email,
      password: user.password,
    },
  });

  const mutation = useMutation({
    mutationFn: EditUser,
    onSuccess: () => {
      toast.success("User updated", { id: "update-user" });
    },
    onError: () => {
      toast.error("Failed to update user", { id: "update-user" });
    },
  });

  const onSubmit = useCallback(
    (values: editUserSchemaType) => {
      toast.loading("Updating user...", { id: "update-user" });
      mutation.mutate({
        endpoint: `http://localhost:8080/users/${user.id}`,
        method: "PUT",
        form: values,
      });
      setIsOpen(!isOpen);
    },
    [mutation, isOpen]
  );

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(isOpen) => {
        form.reset({
          name: user.name,
          email: user.email,
          password: user.password,
        });
        setIsOpen(isOpen);
      }}
    >
      <DialogTrigger asChild>
        <Button>Edit</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit User Data</DialogTitle>
          <DialogDescription>
            Make sure you correctly type the edited user
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama</FormLabel>
                  <FormControl>
                    <Input placeholder="nama" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="password"
                      type={showPassword ? "password" : "text"}
                      {...field}
                    />
                  </FormControl>
                  {showPassword ? (
                    <EyeIcon onClick={() => setShowPassword(!showPassword)} />
                  ) : (
                    <EyeClosedIcon
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full flex flex-row gap-2">
              <div className="flex-1 w-full">
                <Button
                  className="w-full"
                  type="button"
                  onClick={(isOpen) => setIsOpen(!isOpen)}
                  variant={"outline"}
                >
                  Cancel
                </Button>
              </div>
              <div className="flex-1 w-full">
                <Button className="w-full" type="submit">
                  Save
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default EditUserDialog;
