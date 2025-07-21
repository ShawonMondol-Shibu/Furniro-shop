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
  const [page, setPages] = useState<React.ReactNode>();

  function handleDesc(e) {
    e.preventDefault()
    alert(e.value)
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
    <div>
      <div>
        {buttons.map((button: buttonType, index) => (
          <Button key={index} value={'desc'} variant={"ghost"} onClick={button.func}>
            {button.name}
          </Button>
        ))}

        {/* <Button variant={'ghost'} onClick={handleInfo}>info</Button>
        <Button variant={'ghost'} onClick={handleReview}>review</Button> */}
        {page}
      </div>
    </div>
  );
}
