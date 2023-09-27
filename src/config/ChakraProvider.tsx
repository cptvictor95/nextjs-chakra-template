"use client";

import React from "react";
import { ChakraProvider as OGChakraProvider } from "@chakra-ui/react";
import theme from "@/theme";

export const ChakraProvider = ({ children }: { children: React.ReactNode }) => {
  return <OGChakraProvider theme={theme}>{children}</OGChakraProvider>;
};
