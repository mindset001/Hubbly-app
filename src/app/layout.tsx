import type { Metadata } from "next";
import { MuseoModerno } from "next/font/google";
import "./globals.css";

const inter = MuseoModerno({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hubbly",
  description: "All Your Home Needs in One Place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
