"use client";

import React from "react";
import ThemeContextProvider from "./themeContext";

export default function ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeContextProvider>
      {children}
    </ThemeContextProvider>
  );
}
