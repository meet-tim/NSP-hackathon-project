import { AllTripsYouCanJoin } from "@/components/AllTripsYouCanJoin";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { SearchBar } from "@/components/SearchBar";
import { Sidebar } from "@/components/Sidebar";

export default function Dashboard() {
  return (
    <main className="flex flex-row">
      <Sidebar url="trips" />

      <MaxWidthWrapper className="min-h-screen">
        <div>
          <SearchBar />
          <AllTripsYouCanJoin />
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
