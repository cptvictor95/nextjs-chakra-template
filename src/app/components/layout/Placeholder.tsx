import { Box } from "@chakra-ui/react";
import React from "react";

const Placeholder = ({ children, ...rest }: { children: React.ReactNode }) => {
  return (
    <Box
      minH="md"
      bg="gray.800"
      border="1px solid"
      borderColor="gray.600"
      borderRadius="2xl"
      p="4"
      my="4"
      {...rest}
    >
      {children}
    </Box>
  );
};

export default Placeholder;
