"use client";

import theme from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { Red_Hat_Display } from "next/font/google";

const redHatDisplay = Red_Hat_Display({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "dev factory",
  description: "Created by Victor Pudo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={redHatDisplay.className}>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </body>
    </html>
  );
}
