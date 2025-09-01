import type { Metadata } from "next";
import { FetchProjects } from "@/components/layout";

export const metadata: Metadata = {
  title: "Projects | Muhammad affan",
  description: "Projects catalog of portfolio Muhammad Affan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <FetchProjects>
        <>{children}</>
    </FetchProjects>
  );
}
