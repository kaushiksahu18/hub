import { AdminAuthCheck } from "@/components/admin-auth-check";
import { FloatingNavbar } from "@/components/navbar";
import { UsersDataTable } from "@/components/users-data-table";
import Link from "next/link";
import { Suspense } from "react";

export default async function AdminPage() {
  return (
    <FloatingNavbar isRegisterPage={true} title="Admin Panel">
      <div className="container mx-auto py-10 px-4">
        <Suspense fallback={<div>Loading...</div>}>
          <AdminAuthCheck>
            <UsersDataTable />
          </AdminAuthCheck>
        </Suspense>
      </div>
    </FloatingNavbar>
  );
}
