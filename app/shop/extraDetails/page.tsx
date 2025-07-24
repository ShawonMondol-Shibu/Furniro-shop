"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import Description from "./description";
import AdditionalInfo from "./AdditionalInfo";
import Review from "./Review";

interface buttonType {
  func: React.MouseEventHandler<HTMLButtonElement> | undefined;
  name: string;
}

export default function ExtraDetails() {
  const [page, setPages] = useState<React.ReactNode>(<Description />);

  function handleDesc() {
    return setPages(<Description />);
  }
  function handleInfo() {
    return setPages(<AdditionalInfo />);
  }
  function handleReview() {
    return setPages(<Review />);
  }

  const buttons = [
    { name: "Description", func: handleDesc },
    { name: "Additional Information", func: handleInfo },
    { name: "Review", func: handleReview },
  ];
  return (
    <div className="container m-auto mt-10 px-5">
      <div className="text-center mb-10">
        {buttons.map((button: buttonType, index) => (
          <Button
            key={index}
            value={"desc"}
            variant={"ghost"}
            onClick={button.func}
          >
            {button.name}
          </Button>
        ))}
      </div>

      <section className="my-10">{page}</section>
    </div>
  );
}
