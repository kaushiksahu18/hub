import { AdminAuthCheck } from "@/components/admin-auth-check";
import { UsersDataTable } from "@/components/users-data-table";
import { Suspense } from "react";

export default async function AdminPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <Suspense fallback={<div>Loading...</div>}>
        <AdminAuthCheck>
          <UsersDataTable />
        </AdminAuthCheck>
      </Suspense>
    </div>
  );
}
