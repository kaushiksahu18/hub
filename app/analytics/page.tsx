import { AnalyticsChart } from "@/components/analytics-chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAnalyticsData } from "@/lib/analytics";

export default async function AnalyticsPage() {
  const analyticsData = [
    {
      id: 1,
      date: "2023-01-01",
      count: 100,
    },
    {
      id: 2,
      date: "2023-01-02",
      count: 200,
    },
    {
      id: 3,
      date: "2023-01-03",
      count: 300,
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>User Analytics</CardTitle>
          <CardDescription>Daily user count over time</CardDescription>
        </CardHeader>
        <CardContent>
          <AnalyticsChart data={analyticsData} />
        </CardContent>
      </Card>
    </div>
  );
}
