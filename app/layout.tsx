import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechNeeks: Building with AI, Breaking into Tech",
  description:
    "A community-led London tech event for learning AI, building with purpose, and finding your route into tech.",
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
