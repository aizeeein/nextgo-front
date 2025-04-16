// app/(dashboard)/users/page.tsx
import GetUsers from "@/actions/getUsers";

import { User } from "@/types/user";
import UserGrid from "./_components/user-grid";
import CreateUserDialog from "./_components/create-user-dialog";

export default async function UsersPage() {
  const users = await GetUsers();

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-end">        
      </div>
      <UserGrid initialUsers={users} />
    </div>
  );
}
