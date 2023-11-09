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
import { zodResolver } from "@hookform/resolvers/zod";
import { Truck } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const signInFormSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export default function SignIn() {
  const router = useRouter();

  const signInForm = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const signInFormOnSubmit = async (
    values: z.infer<typeof signInFormSchema>
  ) => {
    try {
      const fetchSignUp = await fetch(`${rootApi}/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      });

      const result = await fetchSignUp.json();
      console.log(result);

      if (result.password && result.email) {
        router.push("/dashboard");
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
    <div className="flex h-screen items-center justify-center place-content-center relative isolate">
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
        <div className="flex flex-row mb-14 w-fit mx-auto">
          <h2 className="text-2xl font-medium">CargoTruck</h2>
          <Truck className="w-8 h-8 text-primary" />
        </div>

        <div className="w-[90%] md:w-fit mx-auto bg-white py-6 md:py-6 md:px-14 ring-[0.5px] ring-border  rounded-md shadow-lg">
          <Form {...signInForm}>
            <form
              onSubmit={signInForm.handleSubmit(signInFormOnSubmit)}
              className="space-y-6"
            >
              <div>
                <h1 className="text-3xl font-medium py-4">Sign In</h1>
                <p>Welcome back! Sign in to your account below.</p>
              </div>
              <FormField
                control={signInForm.control}
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
                control={signInForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium">Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="yoUr@passWoRD"
                        {...field}
                        type="password"
                      />
                    </FormControl>
                    <FormDescription>Enter your password</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>

        <div className="flex flex-row mt-6 w-fit mx-auto">
          <p className="text-xs">
            New to CargoTruck?{" "}
            <span>
              <Link href={"/sign-up"} className="text-primary hover:underline">
                Sign Up
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
