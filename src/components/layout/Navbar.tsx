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
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HiMenuAlt1 } from "react-icons/hi";

export const Navbar = () => {
  const { push } = useRouter();

  return (
    <Box as="header" pb={{ base: "4", md: "12" }}>
      <Box as="nav" bg="gray.900" boxShadow="sm">
        <Container py={{ base: "4", lg: "5" }} maxW="4xl">
          <HStack spacing="10" justify="space-between">
            <Heading as="h1" size="md">
              Logo
            </Heading>

            <Flex
              display={{ base: "none", md: "flex" }}
              justify="space-between"
              flex="1"
              w="100%"
            >
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
                  <Button as={Link} key={item.title} href={item.href}>
                    {item.title}
                  </Button>
                ))}
              </ButtonGroup>

              <HStack spacing="3">
                <Button as={Link} variant="outline" href="/signup">
                  Sign up
                </Button>
                <Button as={Link} href="/signin">
                  Sign in
                </Button>
              </HStack>
            </Flex>

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
                <MenuItem as={Link} href="/signup">
                  Sign up
                </MenuItem>
                <MenuItem as={Link} href="/signin">
                  Sign in
                </MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};
