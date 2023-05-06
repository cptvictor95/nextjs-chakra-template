import React from "react";
import { Flex } from "@chakra-ui/react";
import { Footer } from "../components/layout/Footer";
import { Main } from "../components/layout/Main";
import { Navbar } from "../components/layout/Navbar";

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex direction="column" flex="1" minH="100vh">
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </Flex>
  );
};
