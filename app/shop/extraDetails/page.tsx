"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import Description from "./description";
import AdditionalInfo from "./AdditionalInfo";
import Review from "./Review";

export default function ExtraDetails() {
  const [page, setPages] = useState<React.ReactNode>();
  function handleDesc() {
    return setPages(<Description />);
  }
  function handleInfo() {
    return setPages(<AdditionalInfo />);
  }
  function handleReview() {
    return setPages(<Review />);
  }
  return (
    <div>
      <div>
        <Button onClick={handleDesc}>Description</Button>
        <Button onClick={handleInfo}>info</Button>
        <Button onClick={handleReview}>review</Button>
        {page}
      </div>
    </div>
  );
}
