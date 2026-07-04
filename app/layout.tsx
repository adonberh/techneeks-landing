import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechNeeks: Building with AI, Breaking into Tech",
  description:
    "Today's London community tech event for AI, software careers and building useful things.",
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
