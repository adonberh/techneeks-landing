import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechNeeks | London Community Tech",
  description:
    "Hackathon meets the cookout. A London community for people learning, building and connecting around AI, software and useful products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
