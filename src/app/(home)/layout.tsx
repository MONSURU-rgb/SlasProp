"use client";

import React, { PropsWithChildren } from "react";

import DashboardLayout from "@/components/DashboardLayout";

type TemplateProps = PropsWithChildren;

export default function Template({ children }: TemplateProps) {
  return (
    <>
      {" "}
      <DashboardLayout />
      {children}
    </>
  );
}
