"use client";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { FiMenu } from "react-icons/fi";

export const Navbar = () => {
  const router = useRouter();
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <Box as="header" pb={{ base: "4", md: "12" }}>
      <Box as="nav" bg="gray.900" boxShadow="sm">
        <Container py={{ base: "4", lg: "5" }} maxW="4xl">
          <HStack spacing="10" justify="space-between">
            <Heading as="h1" size="md">
              Logo
            </Heading>
            {isDesktop ? (
              <Flex justify="space-between" flex="1" w="100%">
                <ButtonGroup variant="link" spacing="8">
                  {[
                    {
                      title: "Home",
                      href: "/",
                    },
                    {
                      title: "About",
                      href: "/about",
                    },
                  ].map((item) => (
                    <Button
                      key={item.title}
                      onClick={() => router.push(item.href)}
                    >
                      {item.title}
                    </Button>
                  ))}
                </ButtonGroup>

                <HStack spacing="3">
                  <Button
                    variant="outline"
                    onClick={() => router.push("/signup")}
                  >
                    Sign up
                  </Button>
                  <Button variant="solid" onClick={() => router.push("/login")}>
                    Sign in
                  </Button>
                </HStack>
              </Flex>
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};
