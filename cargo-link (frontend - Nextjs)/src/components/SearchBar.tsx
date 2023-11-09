import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { format } from "date-fns";

export function SearchBar() {
  const date = new Date();
  const formattedDate = format(date, "MMMM d, yyyy");
  return (
    <div className="mt-6 bg-white rounded-md shadow-md flex flex-row justify-between items-end py-6 px-4 ring-1 ring-zinc-200">
      <div className="flex flex-row gap-2 w-[70%]">
        <Input type="text" placeholder="Search for a destination" />
        <Button>
          <SearchIcon className="mr-2 w-4 h-4" />
          Search
        </Button>
      </div>
      <div className="text-zinc-500">
        <p>{formattedDate}</p>
      </div>
    </div>
  );
}
