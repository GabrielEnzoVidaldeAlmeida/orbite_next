import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/NavBar";

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
        className={
          "min-h-screen flex flex-col font-poppins bg-orbite-bg-light dark:bg-orbite-bg-dark"
        }
      >
        <header>
          <NavBar />
        </header>
        <main className="flex-1">{children}</main>

        <footer className="bg-red-500">SÓ UM FOOTERZIN BASICO</footer>
      </body>
    </html>
  );
}
