"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CalendarIcon, Check, ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import { submitUserForm } from "@/lib/actions";
import { Calendar } from "./ui/calendar";
import { format, set } from "date-fns";

export const coursess = [
  { label: "Dancing", value: "dancing" },
  { label: "Singing", value: "singing" },
  { label: "Panting", value: "panting" },
];

const pkgs = [
  { label: "1 month", value: "1 month" },
  { label: "3 months", value: "3 months" },
  { label: "6 months", value: "6 months" },
  { label: "12 months", value: "12 months" },
];

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  address: z.string().min(5, {
    message: "Address must be at least 5 characters.",
  }),
  pkg: z.string({
    required_error: "Please select a pkg.",
  }),
  courses: z.string({
    required_error: "Please select a courses.",
  }),
  start_date: z.string({
    required_error: "Please select a start date.",
  }),
  end_date: z.string({
    required_error: "Please select an end date.",
  }),
  came_from: z.string(),
});

export function UserForm() {
  const router = useRouter();
  const [pkgOpen, setPkgOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      pkg: "",
      courses: "",
      start_date: "",
      end_date: "",
      came_from: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true);
      const result = await submitUserForm(values);
      console.log("Form submission result:", result);
      if (result.error) {
        toast({
          title: "Registration Failed",
          description: result.error,
          variant: "destructive",
        });
        return;
      }
      toast({
        title: "Registration Successful",
        description: "Thank you for registering with us!",
      });
      form.reset();
      setStartDate(undefined);
      setEndDate(undefined);
      router.push("/register");
    } catch (error) {
      toast({
        title: "Registration Failed",
        description:
          "There was an error submitting your form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  useEffect(() => {
    if (!startDate) return;
    const tdate = new Date(startDate.getTime());
    console.log("startDate", startDate.toISOString());
    console.log("tdate", tdate.toISOString());
    tdate.setMonth(
      tdate.getMonth() + parseInt(form.getValues("pkg").split(" ")[0])
    );
    console.log("startDate", startDate.toISOString());
    console.log("tdate", tdate.toISOString());
    setEndDate(tdate);
    form.setValue("end_date", tdate.toISOString());
  }, [startDate, pkgOpen]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="john.doe@example.com"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="9876543210" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="123 Main St, City" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pkg"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Package</FormLabel>
              <Popover open={pkgOpen} onOpenChange={setPkgOpen}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={pkgOpen}
                      className={cn(
                        "justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? pkgs.find((pkg) => pkg.value === field.value)?.label
                        : "Select a courses"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="p-0">
                  <Command>
                    <CommandInput placeholder="Search coursess..." />
                    <CommandList>
                      <CommandEmpty>No pkgs found.</CommandEmpty>
                      <CommandGroup>
                        {pkgs.map((pkg) => (
                          <CommandItem
                            key={pkg.value}
                            value={pkg.value}
                            onSelect={(value) => {
                              form.setValue("pkg", value);
                              setPkgOpen(false);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                pkg.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {pkg.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="courses"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Courses(s)</FormLabel>
              <Popover open={coursesOpen} onOpenChange={setCoursesOpen}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={coursesOpen}
                      className={cn(
                        "justify-start py-2",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? // ? field.value.includes(",")
                          //   ? `${field.value.split(",").length} coursess selected`
                          //   : coursess.find(
                          //       (courses) => courses.value === field.value
                          //     )?.label
                          field.value.split(",").map((value) => (
                            <span
                              key={value}
                              className="bg-muted rounded-md px-2 py-1"
                            >
                              {value}
                            </span>
                          ))
                        : "Select coursess"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="p-0">
                  <Command>
                    <CommandInput placeholder="Search coursess..." />
                    <CommandList>
                      <CommandEmpty>No courses found.</CommandEmpty>
                      <CommandGroup>
                        {coursess.map((courses) => (
                          <CommandItem
                            key={courses.value}
                            value={courses.value}
                            onSelect={(value) => {
                              const currentValues = field.value
                                ? field.value.split(",")
                                : [];
                              const valueIndex = currentValues.indexOf(value);

                              if (valueIndex > -1) {
                                // Remove the value
                                currentValues.splice(valueIndex, 1);
                              } else {
                                // Add the value
                                currentValues.push(value);
                              }

                              const newValue = currentValues.join(",");
                              form.setValue("courses", newValue);
                            }}
                          >
                            <div className="flex items-center">
                              <div
                                className={cn(
                                  "mr-2 h-4 w-4 border rounded flex items-center justify-center",
                                  field.value &&
                                    field.value
                                      .split(",")
                                      .includes(courses.value)
                                    ? "bg-primary border-primary"
                                    : "border-input"
                                )}
                              >
                                {field.value &&
                                  field.value
                                    .split(",")
                                    .includes(courses.value) && (
                                    <Check className="h-3 w-3 text-primary-foreground" />
                                  )}
                              </div>
                              {courses.label}
                            </div>
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription>
                You can select multiple coursess
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col md:flex-row items-center justify-start space-y-2 md:space-x-10">
          <FormField
            control={form.control}
            name="start_date"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-2">
                <FormLabel>Start Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] justify-start text-left font-normal",
                        !startDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon />
                      {startDate ? (
                        format(startDate, "P")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={startDate}
                      onSelect={(e) => {
                        setStartDate(e);
                        if (e === undefined) return;
                        form.setValue("start_date", e.toISOString());
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="end_date"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-2">
                <FormLabel>End Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] justify-start text-left font-normal",
                        !endDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon />
                      {endDate ? (
                        format(endDate, "P")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={endDate}
                      onSelect={(e) => {
                        setEndDate(e);
                        if (e === undefined) return;
                        form.setValue("end_date", e.toISOString());
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="came_from"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Came From{" "}
                <span className="text-muted-foreground">(optional)</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="YouTube, Instagram, etc." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Registration"}
        </Button>
      </form>
    </Form>
  );
}
