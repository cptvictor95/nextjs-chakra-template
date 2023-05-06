"use client";

import { Heading } from "@chakra-ui/react";
import Placeholder from "../components/layout/Placeholder";
import { PageLayout } from "../layouts/PageLayout";

const Projects = () => {
  return (
    <PageLayout>
      <Heading as="h1" size="lg">
        About
      </Heading>
      <Placeholder>
        <Heading as="h2" size="md">
          About the page
        </Heading>
      </Placeholder>
    </PageLayout>
  );
};
export default Projects;
