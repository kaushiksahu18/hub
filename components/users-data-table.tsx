"use client";

import { useState, useEffect } from "react";
import {
  type ColumnDef,
  type ColumnFiltersState,
  FilterFn,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getUsers, deleteUser } from "@/lib/actions";
import { toast } from "@/hooks/use-toast";
import { coursess } from "@/components/user-form";
import { locations } from "@/components/user-form";

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  pkg: string;
  courses: string;
  came_from: string;
  start_date: string;
  location: string;
  end_date: string;
  payment_date: string;
  receipt_no: string;
}

const users = [
  { value: "active", label: "Active" },
  { value: "expire", label: "Expire" },
];

export function UsersDataTable() {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const [courseFilter, setCourseFilter] = useState<string>("");
  const [userFilter, setUserFilter] = useState<string>("");
  const [locationFilter, setLocationFilter] = useState<string>("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const users = await getUsers();
        setData(users);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to fetch users data",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  const handleDeleteUser = async (id: string) => {
    if (confirm("Are you sure you want to delete this user?")) {
      try {
        await deleteUser(id);
        setData(data.filter((user) => user.id !== id));
        toast({
          title: "Success",
          description: "User deleted successfully",
        });
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to delete user",
          variant: "destructive",
        });
      }
    }
  };

  const columns: ColumnDef<User>[] = [
    {
      accessorKey: "name",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => {
              console.log("clicked header");
              column.toggleSorting(column.getIsSorted() === "asc")}}
          >
            Name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "phone",
      header: "Phone",
    },
    {
      accessorKey: "address",
      header: "Address",
    },
    {
      accessorKey: "location",
      header: "Location",
      cell: ({ row }) => {
        const location = row.getValue("location") as string;
        return <div>{location}</div>;
      },
      filterFn: FilterFnForLocation,
    },
    {
      accessorKey: "pkg",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Package
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
    },
    {
      accessorKey: "courses",
      header: "Courses",
      cell: ({ row }) => {
        const courses = row.getValue("courses") as string;
        return <div>{courses}</div>;
      },
    },
    {
      accessorKey: "came_from",
      header: "Source",
    },
    {
      accessorKey: "start_date",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Start Date
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const date = row.getValue("start_date") as string;
        return <div>{date.split("T")[0]}</div>;
      },
    },
    {
      accessorKey: "end_date",
      header: "End Date",
      cell: ({ row }) => {
        const date = row.getValue("end_date") as string;
        return <div>{date.split("T")[0]}</div>;
      },
      filterFn: FilterFnForExpireUsers,
    },
    {
      accessorKey: "payment_date",
      header: "Payment Date",
      cell: ({ row }) => {
        const date = row.getValue("payment_date") as string;
        return <div>{date.split("T")[0]}</div>;
      },
    },
    {
      accessorKey: "receipt_no",
      header: "Receipt No",
      cell: ({ row }) => {
        const date = row.getValue("receipt_no") as string;
        return <div>{date}</div>;
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const user = row.original;
        return (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleDeleteUser(user.id)}
          >
            <Trash2 className="h-4 w-4 text-red-500" />
          </Button>
        );
      },
    },
  ];

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
      globalFilter,
    },
    globalFilterFn: "includesString", // built-in filter function
    onGlobalFilterChange: setGlobalFilter,
  });

  useEffect(() => {
    // If both filters are “all”, clear all column filters
    if (
      courseFilter === "all" &&
      userFilter === "all" &&
      locationFilter === "all"
    ) {
      table.resetColumnFilters();
      return;
    }

    // Location filter (string match)
    if (locationFilter && locationFilter !== "all") {
      table.getColumn("location")?.setFilterValue(locationFilter);
    } else {
      table.getColumn("location")?.setFilterValue(undefined);
    }

    // Course filter (string match)
    if (courseFilter && courseFilter !== "all") {
      table.getColumn("courses")?.setFilterValue(courseFilter);
    } else {
      table.getColumn("courses")?.setFilterValue(undefined);
    }

    // Date filter (>=)
    if (userFilter && userFilter !== "all") {
      table.getColumn("end_date")?.setFilterValue(userFilter);
    } else {
      table.getColumn("end_date")?.setFilterValue(undefined);
    }
  }, [courseFilter, userFilter, table, locationFilter]);

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">Loading...</div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 items-center gap-2">
          <Input
            placeholder="Search by any field..."
            value={table.getState().globalFilter ?? ""}
            onChange={(e) => table.setGlobalFilter(String(e.target.value))}
            className="max-w-sm"
          />
          <Select value={locationFilter} onValueChange={setLocationFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Locations" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Users</SelectItem>
              {locations.map((location) => (
                <SelectItem key={location.value} value={location.value}>
                  {location.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={userFilter} onValueChange={setUserFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Users" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Users</SelectItem>
              {users.map((user) => (
                <SelectItem key={user.value} value={user.value}>
                  {user.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={courseFilter} onValueChange={setCourseFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All courses" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All courses</SelectItem>
              {coursess.map((course) => (
                <SelectItem key={course.value} value={course.value}>
                  {course.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="text-sm text-muted-foreground">
          Total Registrations: {data.length}
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2">
        <div className="text-sm text-muted-foreground">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

const FilterFnForExpireUsers: FilterFn<User> = (
  row: any,
  columnId: string,
  filterValue: any
) => {
  console.log("filterValue", filterValue);
  const today = new Date().toISOString();
  const data = row.getValue(columnId);
  if (filterValue === "active") {
    return data >= today;
  } else if (filterValue === "expire") {
    return data < today;
  }
  return true;
};

const FilterFnForLocation: FilterFn<User> = (
  row: any,
  columnId: string,
  filterValue: any
) => {
  console.log("filterValue", filterValue);
  const data = row.getValue(columnId);
  console.log("data", data);
  if (filterValue === data) {
    return true;
  }
  return false;
};
