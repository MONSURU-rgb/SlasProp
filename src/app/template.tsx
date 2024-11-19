"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "@/hooks/use-auth";

const queryClient = new QueryClient();

type TemplateProps = PropsWithChildren;

export default function Template({ children }: TemplateProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider> {children}</AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
