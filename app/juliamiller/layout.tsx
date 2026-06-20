import type { Metadata } from "next";
import styles from "./juliamiller.module.css";

export const metadata: Metadata = {
  title: "!!Wedding!!",
  description: "Marriage?",
};

export default function JuliaMillerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className={styles.route}>{children}</main>;
}
