import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Search } from "lucide-react";
import { Input } from "../ui/input";

export default function NavSearch() {
  return (

      <Popover>
        <PopoverTrigger>
          <Search />
        </PopoverTrigger>
        <PopoverContent>
          <Input />
        </PopoverContent>
      </Popover>
   
  );
}
