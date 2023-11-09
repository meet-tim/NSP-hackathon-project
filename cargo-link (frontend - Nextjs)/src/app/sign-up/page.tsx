"use client";
import { rootApi } from "@/api";
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
// import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Truck } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

// import {useQuery} from "@tanstack/react-query"

const signInFormSchema = z
  .object({
    email: z.string(),
    userName: z.string(),
    password: z
      .string()
      .min(8, { message: "Password must contain at least 5 character(s)" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Password must contain at least 5 character(s)" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export default function SignUp() {
  const router = useRouter();
  // const { toast } = useToast();

  // const query = useQuery()

  const signUpForm = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      userName: "",
      password: "",
      confirmPassword: "",
    },
  });

  const signUpFormOnSubmit = async (
    values: z.infer<typeof signInFormSchema>
  ) => {
    try {
      const fetchSignUp = await fetch(`${rootApi}/register/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: values.userName,
          email: values.email,
          password: values.password,
        }),
      });

      const result = await fetchSignUp.json();
      console.log(result);

      if (result.password && result.email && result.username) {
        router.push("/sign-in");
      }
      // return await fetchSignUp.json();
    } catch (error) {
      console.error(error);
      // toast({
      //   title: "Authentication Failed",
      //   description:
      //     "Your username or email already exits, change it and try again",
      // });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center place-content-center relative isolate">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.375rem]"
        />
      </div>

      <div>
        <div className="flex flex-row mb-14 w-fit mx-auto mt-20">
          <h2 className="text-2xl font-medium">CargoTruck</h2>
          <Truck className="w-8 h-8 text-primary" />
        </div>

        <div className="w-[90%] md:w-fit mx-auto bg-white py-6 md:py-6 md:px-14 ring-[0.5px] ring-border  rounded-md shadow-lg">
          <Form {...signUpForm}>
            <form
              onSubmit={signUpForm.handleSubmit(signUpFormOnSubmit)}
              className="space-y-6"
            >
              <div>
                <h1 className="text-3xl font-medium py-4">Sign Up</h1>
                <p>Hello there! Create your account below.</p>
              </div>
              <FormField
                control={signUpForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium">Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="name@somewhere.com"
                        {...field}
                        type="text"
                      />
                    </FormControl>
                    <FormDescription>Enter your email</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={signUpForm.control}
                name="userName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium">Username</FormLabel>
                    <FormControl>
                      <Input placeholder="user_Name" {...field} type="text" />
                    </FormControl>
                    <FormDescription>Create a new username</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={signUpForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium">
                      Create Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="yoUr@passWoRD"
                        {...field}
                        type="password"
                      />
                    </FormControl>
                    <FormDescription>Create a strong password</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={signUpForm.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium">
                      Confirm your password
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="yoUr@passWoRD"
                        {...field}
                        type="password"
                      />
                    </FormControl>
                    <FormDescription>Enter your password again</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>

        <div className="flex flex-row mt-6 w-fit mx-auto mb-10">
          <p className="text-xs">
            Have an account on CargoTruck?{" "}
            <span>
              <Link href={"/sign-in"} className="text-primary hover:underline">
                Sign In
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
