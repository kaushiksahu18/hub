import { UserForm } from "@/components/user-form";
import { Suspense } from "react";
import { FloatingNavbar } from "@/components/navbar";
// #50d4e3 blue
// #ee6352 red
export default function RegisterPage() {
  return (
    <FloatingNavbar isRegisterPage={true} title="Register">
      <div className="container mx-auto py-10 px-4 md:px-20">
        <Suspense fallback={<div className="text-center">Loading...</div>}>
          <UserForm />
        </Suspense>
      </div>
    </FloatingNavbar>
  );
}
