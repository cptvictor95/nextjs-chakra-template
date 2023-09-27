"use client";

import { ConfirmPasswordField } from "@/components/signInPage/ConfirmPasswordField";
import { OAuthButtonGroup } from "@/components/signInPage/OAuthButtonGroup";
import { PasswordField } from "@/components/signInPage/PasswordField";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const SignUp = () => {
  const { push } = useRouter();
  return (
    <>
      <Container
        maxW="lg"
        py={{ base: "4", md: "8" }}
        px={{ base: "0", sm: "8" }}
      >
        <Stack spacing="8">
          <Stack spacing="6">
            <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
              <Heading size={{ base: "xs", md: "sm" }}>
                Create your account
              </Heading>
              <HStack spacing="1" justify="center">
                <Text color="muted">Already have an account?</Text>
                <Button
                  as={Link}
                  variant="link"
                  colorScheme="blue"
                  href="/signin"
                >
                  Sign in
                </Button>
              </HStack>
            </Stack>
          </Stack>
          <Box
            py={{ base: "0", sm: "4" }}
            px={{ base: "4", sm: "10" }}
            bg={{ base: "transparent", sm: "bg-surface" }}
            boxShadow={{ base: "none", sm: "md" }}
            borderRadius={{ base: "none", sm: "xl" }}
          >
            <Stack spacing="6">
              <Stack spacing="5">
                <Stack direction={{ base: "column", sm: "row" }} spacing="5">
                  <FormControl>
                    <FormLabel htmlFor="firstName">First Name</FormLabel>
                    <Input id="firstName" type="text" />
                  </FormControl>

                  <FormControl>
                    <FormLabel htmlFor="lastName">Last Name</FormLabel>
                    <Input id="lastName" type="text" />
                  </FormControl>
                </Stack>

                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input id="email" type="email" />
                </FormControl>

                <PasswordField />

                <ConfirmPasswordField />
              </Stack>
              <HStack justify="space-between">
                <Checkbox defaultChecked>Remember me</Checkbox>
                <Button variant="link" colorScheme="blue" size="sm">
                  Forgot password?
                </Button>
              </HStack>
              <Stack spacing="6">
                <Button variant="primary">Sign in</Button>
                <HStack>
                  <Divider />
                  <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                    or continue with
                  </Text>
                  <Divider />
                </HStack>
                <OAuthButtonGroup />
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default SignUp;
