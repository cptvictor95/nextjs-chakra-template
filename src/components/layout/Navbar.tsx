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
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { FiMenu } from "react-icons/fi";
import { HiMenuAlt1 } from "react-icons/hi";

export const Navbar = () => {
  const { push } = useRouter();
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
                    <Button key={item.title} onClick={() => push(item.href)}>
                      {item.title}
                    </Button>
                  ))}
                </ButtonGroup>

                <HStack spacing="3">
                  <Button variant="outline" onClick={() => push("/signup")}>
                    Sign up
                  </Button>
                  <Button variant="solid" onClick={() => push("/login")}>
                    Sign in
                  </Button>
                </HStack>
              </Flex>
            ) : (
              <Menu>
                <MenuButton
                  display={{ base: "grid", md: "none" }}
                  as={IconButton}
                  variant="outline"
                  aria-label="Open Menu"
                  placeItems="center"
                  icon={<HiMenuAlt1 fontSize="1.25rem" />}
                />

                <MenuList visibility={{ base: "visible", md: "hidden" }}>
                  <MenuItem onClick={() => push("/signup")}>Sign up</MenuItem>
                  <MenuItem onClick={() => push("/signin")}>Sign in</MenuItem>
                </MenuList>
              </Menu>
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};
