import { Container, Flex } from "@chakra-ui/react";
import React from "react";

export const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex as="main" role="main" direction="column" flex="1" py="4" w="100%">
      <Container flex="1" maxW="4xl">
        {children}
      </Container>
    </Flex>
  );
};
