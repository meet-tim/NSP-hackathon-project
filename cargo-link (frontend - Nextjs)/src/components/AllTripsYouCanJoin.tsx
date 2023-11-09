import { cn } from "@/lib/utils";
import { BadgeCent, Box, MapPin, MoveRight, Timer, Users } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";

export function AllTripsYouCanJoin() {
  return (
    <>
      {/* Trips you can join */}
      <div className="w-full bg-white px-10 py-6 shadow-md rounded-md ring-1 ring-zinc-200 mt-10 mb-10">
        <div className="mb-6 flex flex-row justify-between items-end">
          <h3 className="text-2xl font-medium ">Trips you can join</h3>
        </div>
        {/* Headers */}
        <div className="py-2 px-2 border-y flex flex-row justify-between items-center">
          <p className="font-medium w-[30%] flex flex-row items-center">
            <MapPin className="w-5 h-5 mr-1" /> Destination
          </p>
          <p className="font-medium w-[17.5%] flex flex-row items-center">
            <Users className="w-5 h-5 mr-1" />
            People
          </p>
          <p className="font-medium w-[17.5%] flex flex-row items-center">
            <Timer className="w-5 h-5 mr-1" />
            Departure time
          </p>
          <p className="font-medium w-[17.5%] flex flex-row items-center">
            <Box className="w-5 h-5 mr-1" />
            Space left
          </p>
          <p className="font-medium w-[17.5%] flex flex-row items-center">
            <BadgeCent className="w-5 h-5 mr-1" />
            Base price
          </p>
        </div>
        <div
          className={cn(
            buttonVariants({ variant: "outline" }) +
              "flex flex-row justify-between items-center w-full transition hover:shadow-md border-none my-2 cursor-pointer font-normal"
          )}
        >
          <div className="w-[30%] flex flex-row gap-8">
            <p>Kumasi</p>
            <MoveRight className="text-blue-500" />
            <p>Accra</p>
          </div>

          <div className="w-[17.5%]">
            <p>18 people joining</p>
          </div>
          <div className="w-[17.5%]">
            <p>2 days to departure</p>
          </div>
          <div className="w-[17.5%]">
            <p>
              13m<sup>3</sup> space left
            </p>
          </div>

          <div className="w-[17.5%]">
            <p>GH&#8373;80.00 base price</p>
          </div>
        </div>
        {/* Item */}
        <div
          className={cn(
            buttonVariants({ variant: "outline" }) +
              "flex flex-row justify-between items-center w-full transition hover:shadow-md border-none my-2 cursor-pointer font-normal"
          )}
        >
          <div className="w-[30%] flex flex-row gap-8">
            <p>Kumasi</p>
            <MoveRight className="text-blue-500" />
            <p>Accra</p>
          </div>

          <div className="w-[17.5%]">
            <p>18 people joining</p>
          </div>
          <div className="w-[17.5%]">
            <p>2 days to departure</p>
          </div>
          <div className="w-[17.5%]">
            <p>
              13m<sup>3</sup> space left
            </p>
          </div>

          <div className="w-[17.5%]">
            <p>GH&#8373;80.00 base price</p>
          </div>
        </div>
        {/* Item */}
        <div
          className={cn(
            buttonVariants({ variant: "outline" }) +
              "flex flex-row justify-between items-center w-full transition hover:shadow-md border-none my-2 cursor-pointer font-normal"
          )}
        >
          <div className="w-[30%] flex flex-row gap-8">
            <p>Kumasi</p>
            <MoveRight className="text-blue-500" />
            <p>Accra</p>
          </div>

          <div className="w-[17.5%]">
            <p>18 people joining</p>
          </div>
          <div className="w-[17.5%]">
            <p>2 days to departure</p>
          </div>
          <div className="w-[17.5%]">
            <p>
              13m<sup>3</sup> space left
            </p>
          </div>

          <div className="w-[17.5%]">
            <p>GH&#8373;80.00 base price</p>
          </div>
        </div>
        {/* Item */}
        <div
          className={cn(
            buttonVariants({ variant: "outline" }) +
              "flex flex-row justify-between items-center w-full transition hover:shadow-md border-none my-2 cursor-pointer font-normal"
          )}
        >
          <div className="w-[30%] flex flex-row gap-8">
            <p>Kumasi</p>
            <MoveRight className="text-blue-500" />
            <p>Accra</p>
          </div>

          <div className="w-[17.5%]">
            <p>18 people joining</p>
          </div>
          <div className="w-[17.5%]">
            <p>2 days to departure</p>
          </div>
          <div className="w-[17.5%]">
            <p>
              13m<sup>3</sup> space left
            </p>
          </div>

          <div className="w-[17.5%]">
            <p>GH&#8373;80.00 base price</p>
          </div>
        </div>
        {/* Item */}
        <div
          className={cn(
            buttonVariants({ variant: "outline" }) +
              "flex flex-row justify-between items-center w-full transition hover:shadow-md border-none my-2 cursor-pointer font-normal"
          )}
        >
          <div className="w-[30%] flex flex-row gap-8">
            <p>Kumasi</p>
            <MoveRight className="text-blue-500" />
            <p>Accra</p>
          </div>

          <div className="w-[17.5%]">
            <p>18 people joining</p>
          </div>
          <div className="w-[17.5%]">
            <p>2 days to departure</p>
          </div>
          <div className="w-[17.5%]">
            <p>
              13m<sup>3</sup> space left
            </p>
          </div>

          <div className="w-[17.5%]">
            <p>GH&#8373;80.00 base price</p>
          </div>
        </div>

        <div
          className={cn(
            buttonVariants({ variant: "outline" }) +
              "flex flex-row justify-between items-center w-full transition hover:shadow-md border-none my-2 cursor-pointer font-normal"
          )}
        >
          <div className="w-[30%] flex flex-row gap-8">
            <p>Kumasi</p>
            <MoveRight className="text-blue-500" />
            <p>Accra</p>
          </div>

          <div className="w-[17.5%]">
            <p>18 people joining</p>
          </div>
          <div className="w-[17.5%]">
            <p>2 days to departure</p>
          </div>
          <div className="w-[17.5%]">
            <p>
              13m<sup>3</sup> space left
            </p>
          </div>

          <div className="w-[17.5%]">
            <p>GH&#8373;80.00 base price</p>
          </div>
        </div>

        <div
          className={cn(
            buttonVariants({ variant: "outline" }) +
              "flex flex-row justify-between items-center w-full transition hover:shadow-md border-none my-2 cursor-pointer font-normal"
          )}
        >
          <div className="w-[30%] flex flex-row gap-8">
            <p>Kumasi</p>
            <MoveRight className="text-blue-500" />
            <p>Accra</p>
          </div>

          <div className="w-[17.5%]">
            <p>18 people joining</p>
          </div>
          <div className="w-[17.5%]">
            <p>2 days to departure</p>
          </div>
          <div className="w-[17.5%]">
            <p>
              13m<sup>3</sup> space left
            </p>
          </div>

          <div className="w-[17.5%]">
            <p>GH&#8373;80.00 base price</p>
          </div>
        </div>

        <div
          className={cn(
            buttonVariants({ variant: "outline" }) +
              "flex flex-row justify-between items-center w-full transition hover:shadow-md border-none my-2 cursor-pointer font-normal"
          )}
        >
          <div className="w-[30%] flex flex-row gap-8">
            <p>Kumasi</p>
            <MoveRight className="text-blue-500" />
            <p>Accra</p>
          </div>

          <div className="w-[17.5%]">
            <p>18 people joining</p>
          </div>
          <div className="w-[17.5%]">
            <p>2 days to departure</p>
          </div>
          <div className="w-[17.5%]">
            <p>
              13m<sup>3</sup> space left
            </p>
          </div>

          <div className="w-[17.5%]">
            <p>GH&#8373;80.00 base price</p>
          </div>
        </div>

        <div
          className={cn(
            buttonVariants({ variant: "outline" }) +
              "flex flex-row justify-between items-center w-full transition hover:shadow-md border-none my-2 cursor-pointer font-normal"
          )}
        >
          <div className="w-[30%] flex flex-row gap-8">
            <p>Kumasi</p>
            <MoveRight className="text-blue-500" />
            <p>Accra</p>
          </div>

          <div className="w-[17.5%]">
            <p>18 people joining</p>
          </div>
          <div className="w-[17.5%]">
            <p>2 days to departure</p>
          </div>
          <div className="w-[17.5%]">
            <p>
              13m<sup>3</sup> space left
            </p>
          </div>

          <div className="w-[17.5%]">
            <p>GH&#8373;80.00 base price</p>
          </div>
        </div>

        <div
          className={cn(
            buttonVariants({ variant: "outline" }) +
              "flex flex-row justify-between items-center w-full transition hover:shadow-md border-none my-2 cursor-pointer font-normal"
          )}
        >
          <div className="w-[30%] flex flex-row gap-8">
            <p>Kumasi</p>
            <MoveRight className="text-blue-500" />
            <p>Accra</p>
          </div>

          <div className="w-[17.5%]">
            <p>18 people joining</p>
          </div>
          <div className="w-[17.5%]">
            <p>2 days to departure</p>
          </div>
          <div className="w-[17.5%]">
            <p>
              13m<sup>3</sup> space left
            </p>
          </div>

          <div className="w-[17.5%]">
            <p>GH&#8373;80.00 base price</p>
          </div>
        </div>
      </div>
    </>
  );
}
