import React, { PropsWithChildren } from "react";

import ToastProvider from "../utils/toast";

type LayoutProps = PropsWithChildren;

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
