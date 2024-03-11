import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SpaceWrapper from "./components/app-background/SpaceWrapper.Component";
import PageWrapper from "./components/app-background/PageWrapper.Component";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tom Bleek",
  description: "Tom Bleek's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"grid grid-rows-1 grid-cols-1"}>
        <PageWrapper>
          {children}
        </PageWrapper>
        <SpaceWrapper/>
      </body>
    </html>
  );
}
