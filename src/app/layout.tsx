import HeaderComponent from "@/components/HeaderComponent";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import FooterComponent from "@/components/FooterComponent";

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
      <body className={inter.className}>
        <div className="flex flex-col h-screen">
          <HeaderComponent />
          <div className="content-wrapper grow">{children}</div>
          <FooterComponent />
        </div>
      </body>
    </html>
  );
}
