import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "!!FAQs!!",
  description: "Frequently Asked Questions",
};

export default function FaqsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
