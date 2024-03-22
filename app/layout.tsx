import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SpaceWrapper from "./components/wrappers/space-wrapper/SpaceWrapper.Component";
import PageWrapper from "./components/wrappers/page-wrapper/PageWrapper.Component";

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
      <body className={"grid justify-center"}>
        <PageWrapper>
          {children}
        </PageWrapper>
        <SpaceWrapper/>
      </body>
    </html>
  );
}
