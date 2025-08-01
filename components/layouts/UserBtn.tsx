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
        <UserButton />
      ) : (
        <Button
          variant="ghost"
          onClick={() => {
            if (openSignIn) openSignIn();
          }}
          size={'icon'}
          asChild
          className="p-1.5"
        >
          <User2 />
        </Button>
      )}
    </>
  );
}
