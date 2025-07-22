import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { User, User2 } from "lucide-react";

export default function UserButton() {
  return (
    <Popover>
      <PopoverTrigger>
        <User2 />
      </PopoverTrigger>
      <PopoverContent>
        <User />
      </PopoverContent>
    </Popover>
  );
}
