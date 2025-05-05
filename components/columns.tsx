"use client"

import type { ColumnDef } from "@tanstack/react-table"
import { format, parseISO } from "date-fns"

export type Analytics = {
  id: number
  date: string
  count: number
}

export const columns: ColumnDef<Analytics>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      const date = row.getValue("date") as string
      return format(parseISO(date), "MMM d, yyyy")
    },
  },
  {
    accessorKey: "count",
    header: "User Count",
    cell: ({ row }) => {
      const count = row.getValue("count") as number
      return count.toLocaleString()
    },
  },
]
