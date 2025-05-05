"use client"

import { useMemo } from "react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { format, parseISO } from "date-fns"

import { Card } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface AnalyticsData {
  id: number
  date: string
  count: number
}

interface AnalyticsChartProps {
  data: AnalyticsData[]
}

export function AnalyticsChart({ data }: AnalyticsChartProps) {
  const chartData = useMemo(() => {
    return data.map((item) => ({
      ...item,
      formattedDate: format(parseISO(item.date), "MMM d"),
    }))
  }, [data])

  if (data.length === 0) {
    return (
      <Card className="flex h-[350px] items-center justify-center">
        <p className="text-muted-foreground">No analytics data available</p>
      </Card>
    )
  }

  return (
    <ChartContainer
      config={{
        users: {
          label: "Users",
          color: "hsl(var(--chart-1))",
        },
      }}
      className="h-[350px]"
    >
      <AreaChart
        data={chartData}
        margin={{
          top: 16,
          right: 16,
          bottom: 16,
          left: 16,
        }}
      >
        <defs>
          <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8} />
            <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="formattedDate" tickLine={false} axisLine={false} tickMargin={8} minTickGap={8} />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => `${value}`}
          domain={[0, "dataMax + 20"]}
        />
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Area
          type="monotone"
          dataKey="count"
          name="users"
          stroke="var(--color-users)"
          fillOpacity={1}
          fill="url(#colorUsers)"
        />
      </AreaChart>
    </ChartContainer>
  )
}
