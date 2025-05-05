import prisma from "./prisma";

export async function getAnalyticsData() {
  try {
    const data = await prisma.analytics.findMany()
    console.log("Fetched analytics data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching analytics data:", error);
    return [];
  }
}
