"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import prisma from "./prisma";

const userFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  address: z.string().min(5),
  pkg: z.string(),
  courses: z.string(),
  start_date: z.string(),
  end_date: z.string(),
  came_from: z.string(),
});

export async function submitUserForm(formData: z.infer<typeof userFormSchema>) {
  const validatedFields = userFormSchema.safeParse(formData);

  if (!validatedFields.success) {
    return { error: "Invalid form data" };
  }

  const {
    name,
    email,
    phone,
    address,
    pkg,
    courses,
    start_date,
    end_date,
    came_from,
  } = validatedFields.data;

  // Check if the email already exists
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (user) {
    console.log("Email already exists:", email);
    return { error: "Email already exists" };
  }

  // Simulate saving to a database
  const data = await prisma.user.create({
    data: {
      id: Date.now().toString(),
      name,
      email,
      phone,
      address,
      pkg,
      courses,
      came_from,
      start_date,
      end_date,
    },
  });

  console.log("User created:", data);

  revalidatePath("/admin");
  return { success: true };
}

export async function getUsers() {
  const users = await prisma.user.findMany();
  if (users.length === 0) return [];
  console.log("Users fetched:", users);
  return users;
}

export async function deleteUser(id: string) {
  await prisma.user.delete({
    where: { id },
  });
  console.log("User deleted:", id);
  revalidatePath("/admin");
}

// Mock authentication for demo purposes
// In a real app, you would use a proper auth solution
export async function authenticate(credentials: {
  email: string;
  password: string;
}) {
  // For demo purposes, hardcoded admin credentials
  if (
    credentials.email === process.env.Email &&
    credentials.password === process.env.Password
  ) {
    return { success: true };
  }

  return { error: "Invalid credentials" };
}
