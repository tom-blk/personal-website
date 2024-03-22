import type { Metadata } from "next";

import SpaceWrapper from "./components/wrappers/space-wrapper/SpaceWrapper.Component";
import PageWrapper from "./components/wrappers/page-wrapper/PageWrapper.Component";

import "./globals.css";

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
      <body className={"grid py-6 justify-center"}>
        <PageWrapper>
          {children}
        </PageWrapper>
        <SpaceWrapper/>
      </body>
    </html>
  );
}
