import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Movies",
  description: "Top Movies List",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
