"use client";

import { PageLayout } from "@/layouts/PageLayout";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return <PageLayout>{children}</PageLayout>;
};

export default layout;
