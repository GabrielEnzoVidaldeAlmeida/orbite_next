import type { Metadata } from "next";
import "../globals.css";
import { NavBar } from "@/components/NavBar";
import Footer from "@/components/Footer";
import MenuLateral from "@/components/MenuLateral";

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
        <div className="flex flex-1">
          <MenuLateral />
          <main>{children}</main>
        </div>

        <Footer />
      </body>
    </html>
  );
}
