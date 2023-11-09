"use client";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { Sidebar } from "@/components/Sidebar";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronDown, PackageCheck } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";

const regions = [
  { label: "Ahafo", value: "Ahafo" },
  { label: "Ashanti", value: "Ashanti" },
  { label: "Bono East", value: "Bono East" },
  { label: "Brong Ahafo", value: "Brong Ahafo" },
  { label: "Central", value: "Central" },
  { label: "Eastern", value: "Eastern" },
  { label: "Greater Accra", value: "Greater Accra" },
  { label: "North East", value: "North East" },
  { label: "Northern", value: "Nothern" },
  { label: "Oti", value: "Oti" },
  { label: "Savannah", value: "Savannah" },
  { label: "Upper East", value: "Upper East" },
  { label: "Upper West", value: "Upper West" },
  { label: "Western", value: "Western" },
  { label: "Western North", value: "Western North" },
  { label: "Volta", value: "Volta" },
];

const sizes = [
  {
    label: "Extra small (approx. small traveling bag)",
    value: "xs",
  },
  {
    label: "Small (approx. medium traveling bag)",
    value: "sm",
  },
  {
    label: "Medium (approx. table top refrigerator)",
    value: "md",
  },
  {
    label: "Large (approx. double door refrigerator)",
    value: "lg",
  },
  {
    label: "Extra Large (approx. big wardrobe)",
    value: "xl",
  },
];

const bookingFormSchema = z.object({
  fullName: z.string(),
  phoneNumber: z.string(),
  ghanaCardNumber: z.string(),
  shippingFrom: z.string({
    required_error: "Please select where you are shipping from",
  }),
  shippingTo: z.string({
    required_error: "Please select where you are shipping to",
  }),
  sizeCategory: z.string().optional(),
  sizeLength: z.number().optional(),
  sizeWidth: z.number().optional(),
  sizeHeight: z.number().optional(),
});

export default function Dashboard() {
  const [isShippingFromOpen, setIsShippingFromOpen] = useState(false);
  const [isShippingToOpen, setIsShippingToOpen] = useState(false);
  const [showSelectCategory, setShowSelectCategory] = useState(true);
  const [showSelectSize, setShowSelectSize] = useState(false);

  const bookATripForm = useForm<z.infer<typeof bookingFormSchema>>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      sizeHeight: 0,
      sizeLength: 0,
      sizeWidth: 0,
      fullName: "",
      phoneNumber: "",
      ghanaCardNumber: "",
    },
  });

  const bookATripFormOnSubmit = (values: z.infer<typeof bookingFormSchema>) => {
    console.log(values);
  };

  return (
    <main className="flex flex-row">
      <Sidebar url="booking" />

      <MaxWidthWrapper className="min-h-screen">
        <div>
          <div className=" mt-10 flex flex-row justify-between items-end bg-white rounded-md ring-1 ring-zinc-200 shadow-md p-6">
            <div>
              <h1 className="text-4xl font-semibold">Book your trip</h1>
              <p className="mt-3">
                Provide details of your trip and others will join
              </p>
            </div>
            <div>
              <Button variant={"outline"}>Choose a Trip Instead</Button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-8 mt-10">
            <div className="col-span-3">
              <div>
                <div className="bg-white px-10 py-6 shadow-md rounded-md ring-1 ring-zinc-200 ">
                  <div className="flex flex-row gap-2 items-center">
                    <PackageCheck className="w-8 h-8 text-primary" />
                    <p className="text-lg font-medium">Items for delivery</p>
                  </div>
                  <div className="ring-1 ring-zinc-200 mt-6 p-6 rounded-md">
                    <h2 className="text-2xl font-medium">Package Details</h2>
                    <Form {...bookATripForm}>
                      <form
                        onSubmit={bookATripForm.handleSubmit(
                          bookATripFormOnSubmit
                        )}
                        className="space-y-6 mt-6"
                      >
                        <FormField
                          control={bookATripForm.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full name</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Your Full Name"
                                  {...field}
                                  type="text"
                                />
                              </FormControl>
                              <FormDescription>
                                Your full name goes here
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={bookATripForm.control}
                          name="phoneNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="0123456789"
                                  {...field}
                                  type="text"
                                />
                              </FormControl>
                              <FormDescription>
                                Type your phone number here
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={bookATripForm.control}
                          name="ghanaCardNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Ghana Card</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="GH000000001"
                                  {...field}
                                  type="text"
                                />
                              </FormControl>
                              <FormDescription>
                                Type the ID on you Ghana Card here
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="grid grid-cols-2 gap-6">
                          <FormField
                            control={bookATripForm.control}
                            name="shippingFrom"
                            render={({ field }) => (
                              <FormItem className="flex flex-col">
                                <FormLabel>Shipping From</FormLabel>
                                <Popover
                                  open={isShippingFromOpen}
                                  onOpenChange={setIsShippingFromOpen}
                                >
                                  <PopoverTrigger asChild>
                                    <FormControl>
                                      <Button
                                        variant="outline"
                                        role="combobox"
                                        className={cn(
                                          "w-full justify-between",
                                          !field.value &&
                                            "text-muted-foreground"
                                        )}
                                      >
                                        {field.value
                                          ? regions.find(
                                              (region) =>
                                                region.value === field.value
                                            )?.label
                                          : "Choose a Region"}
                                        <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                      </Button>
                                    </FormControl>
                                  </PopoverTrigger>
                                  <PopoverContent className="w-full p-0">
                                    <Command>
                                      <CommandInput placeholder="Search region..." />
                                      <CommandEmpty>
                                        No language found.
                                      </CommandEmpty>
                                      <CommandGroup>
                                        {regions.map((region) => (
                                          <CommandItem
                                            value={region.label}
                                            key={region.value}
                                            onSelect={() => {
                                              bookATripForm.setValue(
                                                "shippingFrom",
                                                region.value
                                              );
                                              setIsShippingFromOpen(false);
                                            }}
                                          >
                                            <Check
                                              className={cn(
                                                "mr-2 h-4 w-4",
                                                region.value === field.value
                                                  ? "opacity-100"
                                                  : "opacity-0"
                                              )}
                                            />
                                            {region.label}
                                          </CommandItem>
                                        ))}
                                      </CommandGroup>
                                    </Command>
                                  </PopoverContent>
                                </Popover>
                                <FormDescription>
                                  This is where you are shipping your items from
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={bookATripForm.control}
                            name="shippingTo"
                            render={({ field }) => (
                              <FormItem className="flex flex-col">
                                <FormLabel>Shipping To</FormLabel>
                                <Popover
                                  open={isShippingToOpen}
                                  onOpenChange={setIsShippingToOpen}
                                >
                                  <PopoverTrigger asChild>
                                    <FormControl>
                                      <Button
                                        variant="outline"
                                        role="combobox"
                                        className={cn(
                                          "w-full justify-between",
                                          !field.value &&
                                            "text-muted-foreground"
                                        )}
                                      >
                                        {field.value
                                          ? regions.find(
                                              (region) =>
                                                region.value === field.value
                                            )?.label
                                          : "Choose a Region"}
                                        <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                      </Button>
                                    </FormControl>
                                  </PopoverTrigger>
                                  <PopoverContent className="w-full p-0">
                                    <Command>
                                      <CommandInput placeholder="Search region..." />
                                      <CommandEmpty>
                                        No language found.
                                      </CommandEmpty>
                                      <CommandGroup>
                                        {regions.map((region) => (
                                          <CommandItem
                                            value={region.label}
                                            key={region.value}
                                            onSelect={() => {
                                              bookATripForm.setValue(
                                                "shippingTo",
                                                region.value
                                              );
                                              setIsShippingToOpen(false);
                                            }}
                                          >
                                            <Check
                                              className={cn(
                                                "mr-2 h-4 w-4",
                                                region.value === field.value
                                                  ? "opacity-100"
                                                  : "opacity-0"
                                              )}
                                            />
                                            {region.label}
                                          </CommandItem>
                                        ))}
                                      </CommandGroup>
                                    </Command>
                                  </PopoverContent>
                                </Popover>
                                <FormDescription>
                                  This is where you are shipping your items to
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        {/* Switch to select between selecting your own dimensions or auto dimensions */}
                        <div className="border p-4 rounded-lg flex flex-col space-y-6">
                          <div className="flex flex-row items-center justify-between ">
                            <div className="space-y-0.5">
                              <FormLabel className="text-base">
                                Select Dimensions
                              </FormLabel>
                              <FormDescription>
                                Switch between typing your own package
                                dimensions or selecting a package category
                              </FormDescription>
                            </div>
                            <FormControl>
                              <Switch
                                checked={showSelectCategory}
                                onCheckedChange={setShowSelectCategory}
                              />
                            </FormControl>
                          </div>
                          {showSelectCategory ? (
                            <FormField
                              control={bookATripForm.control}
                              name="sizeCategory"
                              render={({ field }) => (
                                <FormItem className="flex flex-col">
                                  <FormLabel>Size Category</FormLabel>
                                  <Popover
                                    open={showSelectSize}
                                    onOpenChange={setShowSelectSize}
                                  >
                                    <PopoverTrigger asChild>
                                      <FormControl>
                                        <Button
                                          variant="outline"
                                          role="combobox"
                                          className={cn(
                                            "w-full justify-between",
                                            !field.value &&
                                              "text-muted-foreground"
                                          )}
                                        >
                                          {field.value
                                            ? sizes.find(
                                                (sizes) =>
                                                  sizes.value === field.value
                                              )?.label
                                            : "Choose a Size Category"}
                                          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                      </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-full p-0">
                                      <Command>
                                        <CommandInput placeholder="Search size category..." />
                                        <CommandEmpty>
                                          No size category found.
                                        </CommandEmpty>
                                        <CommandGroup>
                                          {sizes.map((size) => (
                                            <CommandItem
                                              value={size.label}
                                              key={size.value}
                                              onSelect={() => {
                                                bookATripForm.setValue(
                                                  "sizeCategory",
                                                  size.value
                                                );
                                                setShowSelectSize(false);
                                              }}
                                            >
                                              <Check
                                                className={cn(
                                                  "mr-2 h-4 w-4",
                                                  size.value === field.value
                                                    ? "opacity-100"
                                                    : "opacity-0"
                                                )}
                                              />
                                              {size.label}
                                            </CommandItem>
                                          ))}
                                        </CommandGroup>
                                      </Command>
                                    </PopoverContent>
                                  </Popover>
                                  <FormDescription>
                                    Select an approximate size based on your
                                    packages or cargo
                                  </FormDescription>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          ) : (
                            <div className="grid grid-cols-3 gap-4">
                              <FormField
                                control={bookATripForm.control}
                                name="sizeHeight"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Height</FormLabel>
                                    <FormControl>
                                      <Input
                                        placeholder="height of package"
                                        {...field}
                                        type="number"
                                        onChange={(e) =>
                                          field.onChange(Number(e.target.value))
                                        }
                                      />
                                    </FormControl>
                                    <FormDescription>
                                      Type the height (inches) of your package
                                      here
                                    </FormDescription>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />

                              <FormField
                                control={bookATripForm.control}
                                name="sizeWidth"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Width</FormLabel>
                                    <FormControl>
                                      <Input
                                        placeholder="width of package"
                                        {...field}
                                        type="number"
                                        onChange={(e) =>
                                          field.onChange(Number(e.target.value))
                                        }
                                      />
                                    </FormControl>
                                    <FormDescription>
                                      Type the width (inches) of your package
                                      here
                                    </FormDescription>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />

                              <FormField
                                control={bookATripForm.control}
                                name="sizeLength"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Length</FormLabel>
                                    <FormControl>
                                      <Input
                                        placeholder="length of package"
                                        {...field}
                                        type="number"
                                        onChange={(e) =>
                                          field.onChange(Number(e.target.value))
                                        }
                                      />
                                    </FormControl>
                                    <FormDescription>
                                      Type the length (inches) of your package
                                      here
                                    </FormDescription>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          )}
                        </div>
                        <Button type="submit">Calculate</Button>
                      </form>
                    </Form>
                  </div>
                </div>
              </div>
            </div>

            {/* Price estimator */}

            <div className="col-span-1 rounded-md overflow-hidden ring-1 ring-zinc-200 shadow-md h-fit">
              <div className="w-full bg-primary h-36 flex flex-col justify-center items-center text-white gap-y-2">
                <p className="w-fit text-xl font-medium">
                  Estimated Total Cost
                </p>
                <p className="w-fit font-medium">GH&#8373;80.00</p>
              </div>
              <div className="bg-white h-64 flex flex-col justify-center items-center gap-y-4 p-4">
                <p className=" text-lg font-medium">
                  Below are included in the quote above
                </p>
                <p className="font-medium text-zinc-500">Weight: 12kg</p>
                <p className="font-medium text-zinc-500">Distance: 13km</p>
                <Button variant={"default"}>Book Trip</Button>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
