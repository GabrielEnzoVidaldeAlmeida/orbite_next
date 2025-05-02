import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Orbite",
  description: "Sistema web de podcasts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={"font-poppins bg-orbite-bg-light dark:bg-orbite-bg-dark"}
      >
        {children}
      </body>
    </html>
  );
}
