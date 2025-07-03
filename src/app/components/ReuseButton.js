"use client";
import React from "react";
import { Button } from "react-bootstrap";
import "../globals.css";

export default function ReuseButton({ description1, }) {
  return (
    <>
      <div className="d-flex align-items-center ">
          <Button className="quote-button">{description1}</Button>
      </div>
    </>
  );
}
