"use client";
import { Truck, LayoutDashboard, LibraryBig, BusFront } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import userPic from "@/assets/userPic.png";
import { useRouter } from "next/navigation";
import { rootApi } from "@/api";

interface SideBarProps {
  url: "dashboard" | "booking" | "trips";
}

export function Sidebar({ url }: SideBarProps) {
  const router = useRouter();

  const logOutOnSubmit = async () => {
    try {
      const fetchSignUp = await fetch(`${rootApi}/logout/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await fetchSignUp.status;
      console.log(result);

      if (result === 200) {
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
    <div className="w-[340px] bg-white rounded-r-lg outline outline-zinc-300 relative">
      <div className="p-10 fixed top-0 left-0 h-[80%]">
        <div className="flex flex-row w-full pb-8 ">
          <h2 className="text-2xl font-medium">CargoTruck</h2>
          <Truck className="w-8 h-8 text-primary" />
        </div>
        <div className=" w-full mx-auto border-b border-border" />
        <div className="flex flex-col content-between justify-between h-full">
          <div className="mt-8 flex flex-col space-y-6">
            <Link
              href={"/dashboard"}
              className={`flex flex-row gap-4 items-center px-4 py-2 ${
                url === "dashboard" && "rounded-2xl bg-primary text-white"
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span> Dashboard </span>
            </Link>
            <Link
              href={"/booking"}
              className={`flex flex-row gap-4 items-center px-4 py-2 ${
                url === "booking" && "rounded-2xl bg-primary text-white"
              }`}
            >
              <LibraryBig className="w-4 h-4" />
              <span> Booking </span>
            </Link>
            <Link
              href={"/trips"}
              className={`flex flex-row gap-4 items-center px-4 py-2 ${
                url === "trips" && "rounded-2xl bg-primary text-white"
              }`}
            >
              <BusFront className="w-4 h-4" />
              <span> Trips </span>
            </Link>
          </div>

          <div className="mx-auto text-center">
            <div className="w-16 h-16 rounded-full mx-auto ring ring-zinc-200 overflow-hidden mb-3">
              <Image src={userPic} alt="user picture" width={64} height={64} />
            </div>
            <p>Emily Johnson</p>

            <div className="flex flex-col gap-2">
              <Button
                variant={"secondary"}
                className="mt-2 ring-1 ring-zinc-100"
              >
                <Link href={"/driver/register"}>Become a Driver</Link>
              </Button>
              <Button
                variant={"ghost"}
                onClick={() => logOutOnSubmit()}
                className="mt-2 ring-1 ring-zinc-100"
              >
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
