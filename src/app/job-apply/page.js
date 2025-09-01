"use client";

import { Suspense } from "react";
import JobApply from "../components/JobApply";

export default function JobApplicationForm() {
  return (
    <Suspense fallback={<div>Loading job...</div>}>
      <JobApply />
    </Suspense>
  );
}
