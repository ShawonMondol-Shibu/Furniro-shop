"use client";
import React from "react";
import { User2 } from "lucide-react";
import { useClerk, useUser, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

export default function UserBtn() {
  const { user, isLoaded } = useUser();
  const { openSignIn } = useClerk();

  if (!isLoaded) return null; // Wait till Clerk loads

  return (
    <>
      {user ? (
        <UserButton afterSignOutUrl="/" />
      ) : (
        <Button
          variant="ghost"
          onClick={() => {
            if (openSignIn) openSignIn();
          }}
          className="p-2"
        >
          <User2 size={20} />
        </Button>
      )}
    </>
  );
}
