import FooterComponent from "@/components/server/FooterComponent";
import HeaderComponent from "@/components/server/HeaderComponent";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyList",
  description: "My List Demo App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={inter.className + " bg-slate-100 flex flex-col h-screen "}
      >
        <HeaderComponent />
        <section className="content-wrapper grow mx-12 pt-4">{children}</section>
        <FooterComponent />
      </body>
    </html>
  );
}
