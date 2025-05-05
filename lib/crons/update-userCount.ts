import prisma from "../prisma";

export async function GET(request: Request) {
  const row = await prisma.analytics.create({
    data: {
      count: 1,
      date: new Date().toUTCString(),
    },
  });
  console.log("row", row);
  if (!row) {
    return new Response("Error", { status: 500 });
  }
  return new Response("Update Done!");
}
