import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "Soobin Portfolio",
  description: "Web Portfolio of Soobin, Jeong",
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
