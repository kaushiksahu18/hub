"use client"

import { useState } from "react"
import { BarChart, LineChart, Calendar, ArrowUpRight } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AnalyticsChart } from "@/components/analytics-chart"
import { DataTable } from "@/components/data-table"
import { columns } from "@/components/columns"

interface AnalyticsData {
  id: number
  date: string
  count: number
}

interface AnalyticsDashboardProps {
  data: AnalyticsData[]
}

export function AnalyticsDashboard({ data }: AnalyticsDashboardProps) {
  const [view, setView] = useState<"chart" | "table">("chart")

  const totalUsers = data.reduce((sum, item) => sum + item.count, 0)
  const averageUsers = data.length > 0 ? Math.round(totalUsers / data.length) : 0
  const maxUsers = data.length > 0 ? Math.max(...data.map((item) => item.count)) : 0

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <LineChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalUsers.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Across all recorded days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Daily Users</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{averageUsers.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Per day on average</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Peak Users</CardTitle>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{maxUsers.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Highest daily count</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Time Period</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.length} days</div>
            <p className="text-xs text-muted-foreground">Data collection period</p>
          </CardContent>
        </Card>
      </div>

      <Card className="col-span-4">
        <CardHeader className="flex flex-row items-center">
          <div>
            <CardTitle>User Analytics</CardTitle>
            <CardDescription>Daily user count over time</CardDescription>
          </div>
          <div className="ml-auto flex space-x-2">
            <Button variant={view === "chart" ? "default" : "outline"} size="sm" onClick={() => setView("chart")}>
              <LineChart className="mr-2 h-4 w-4" />
              Chart
            </Button>
            <Button variant={view === "table" ? "default" : "outline"} size="sm" onClick={() => setView("table")}>
              <BarChart className="mr-2 h-4 w-4" />
              Table
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {view === "chart" ? <AnalyticsChart data={data} /> : <DataTable columns={columns} data={data} />}
        </CardContent>
      </Card>
    </div>
  )
}
