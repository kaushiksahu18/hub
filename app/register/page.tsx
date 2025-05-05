import { UserForm } from "@/components/user-form";
import { Suspense } from "react";

export default function RegisterPage() {
  return (
    <div className="container mx-auto py-10 px-4 md:px-20">
      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <UserForm />
      </Suspense>
    </div>
  );
}
