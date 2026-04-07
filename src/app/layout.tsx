import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "From publisher to frontend in progress",
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
