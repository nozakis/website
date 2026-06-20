import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "!!Travel & Lodging!!",
  description: "Travel Information",
};

export default function TravelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
