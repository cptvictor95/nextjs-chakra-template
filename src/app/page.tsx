"use client";
import { Heading } from "@chakra-ui/react";
import Placeholder from "./components/layout/Placeholder";
import { PageLayout } from "./layouts/PageLayout";

const Home = () => {
  return (
    <PageLayout>
      <Heading as="h1" size="lg" mb="auto">
        Home
      </Heading>

      <Placeholder>Your content here</Placeholder>
    </PageLayout>
  );
};

export default Home;
