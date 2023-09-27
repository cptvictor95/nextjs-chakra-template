"use client";
import Placeholder from "@/components/layout/Placeholder";
import { PageLayout } from "@/layouts/PageLayout";
import { Heading } from "@chakra-ui/react";

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
