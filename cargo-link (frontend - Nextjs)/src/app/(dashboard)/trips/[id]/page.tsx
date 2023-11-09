import { AllTripsYouCanJoin } from "@/components/AllTripsYouCanJoin";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { SearchBar } from "@/components/SearchBar";
import { Sidebar } from "@/components/Sidebar";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  MapPin,
  Users,
  Timer,
  Box,
  BadgeCent,
  MoveRight,
  BusFront,
  Luggage,
  ChevronDown,
  MoveDown,
  PlaneTakeoff,
  CalendarCheck,
  PlaneLanding,
  Truck,
  Navigation,
  Ruler,
  LocateFixed,
} from "lucide-react";

export default function Dashboard() {
  return (
    <main className="flex flex-row">
      <Sidebar url="trips" />

      <MaxWidthWrapper className="min-h-screen">
        <div>
          <SearchBar />
          {/* <AllTripsYouCanJoin />
           */}

          <>
            {/* Trips you can join */}
            <div className="w-full bg-zinc-100 px-10 py-6 shadow-md rounded-md ring-1 ring-zinc-200 mt-10 mb-10">
              <div className="mb-6 flex flex-row justify-between items-end">
                <h3 className="text-2xl font-medium ">Trip details</h3>
                <div className=" text-sm text-zinc-500 flex flex-row gap-x-4">
                  <div className="flex flex-row gap-x-1">
                    <BusFront className="w-6 h-6" /> <p>12345 Trip ID</p>
                  </div>
                  <div className="flex flex-row gap-x-1">
                    <Luggage className="w-6 h-6" />
                    <p>89323 Luggage ID</p>
                  </div>
                </div>
              </div>
              {/* Headers */}
              <div className="py-6 px-4 rounded-md flex flex-row justify-between items-center bg-white w-full">
                <div className="flex flex-row justify-between w-full gap-4">
                  <div className="flex flex-col justify-between gap-4 ">
                    <div>
                      <div className="flex flex-row gap-2">
                        <PlaneTakeoff />
                        <p className="font-medium">From Ashanti</p>
                      </div>
                      <div className="flex flex-row gap-2 items-center mt-2">
                        <CalendarCheck className="h-4 w-4" />
                        <p className="font-light ">18-02-23</p>
                      </div>
                    </div>
                    <MoveDown className="text-primary" />
                    <div>
                      <div className="flex flex-row gap-2">
                        <PlaneLanding />
                        <p className="font-medium">To Ashanti</p>
                      </div>
                      <div className="flex flex-row gap-2 items-center mt-2">
                        <CalendarCheck className="h-4 w-4" />
                        <p className="font-light ">18-02-23</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between gap-4 ">
                    <div>
                      <div className="flex flex-row gap-2">
                        <Truck />
                        <p className="font-medium">Cargo Truck</p>
                      </div>
                      <div className="flex flex-row gap-2 items-center mt-2">
                        <Ruler className="h-4 w-4" />
                        <p className="font-light ">1125 ltrs truck</p>
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-row gap-2">
                        <Navigation />
                        <p className="font-medium">Destination Location</p>
                      </div>
                      <div className="flex flex-row gap-2 items-center mt-2">
                        <LocateFixed className="h-4 w-4" />
                        <p className="font-light ">Adum</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between gap-4 ">
                    <div>
                      <div className="flex flex-row gap-2">
                        <Truck />
                        <p className="font-medium">Your cargo Size</p>
                      </div>
                      <div className="flex flex-row gap-2 items-center mt-2">
                        <Ruler className="h-4 w-4" />
                        <p className="font-light ">25 ltrs</p>
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-row gap-2">
                        <Navigation />
                        <p className="font-medium">Arrival Location</p>
                      </div>
                      <div className="flex flex-row gap-2 items-center mt-2">
                        <LocateFixed className="h-4 w-4" />
                        <p className="font-light ">Mampong</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
