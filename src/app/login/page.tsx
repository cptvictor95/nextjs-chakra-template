"use client";

import { OAuthButtonGroup } from "@/components/loginPage/OAuthButtonGroup";
import { PasswordField } from "@/components/loginPage/PasswordField";
import { PageLayout } from "@/layouts/PageLayout";
import {
  Container,
  Stack,
  Heading,
  HStack,
  Button,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Divider,
  Text,
  Box,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const { push } = useRouter();

  return (
    <PageLayout>
      <Container
        maxW="lg"
        py={{ base: "4", md: "12" }}
        px={{ base: "0", sm: "8" }}
      >
        <Stack spacing="8">
          <Stack spacing="6">
            <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
              <Heading size={{ base: "xs", md: "sm" }}>
                Log in to your account
              </Heading>
              <HStack spacing="1" justify="center">
                <Text color="muted">Dont have an account?</Text>
                <Button
                  variant="link"
                  colorScheme="blue"
                  onClick={() => push("/signup")}
                >
                  Sign up
                </Button>
              </HStack>
            </Stack>
          </Stack>
          <Box
            py={{ base: "0", sm: "8" }}
            px={{ base: "4", sm: "10" }}
            bg={{ base: "transparent", sm: "bg-surface" }}
            boxShadow={{ base: "none", sm: "md" }}
            borderRadius={{ base: "none", sm: "xl" }}
          >
            <Stack spacing="6">
              <Stack spacing="5">
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input id="email" type="email" />
                </FormControl>
                <PasswordField />
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
    </PageLayout>
  );
};
export default Login;
