import { Inter } from "next/font/google";
import Link from "next/link";
import { Fragment } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vote0 - App",
  description: "App to register data",
};

export default function Layout_tabs({
  children,
}: {
  children: React.ReactNode;
}) {
    return(
        <main>
          <div>Tabs Layout</div>
          <div>{children}</div>
        </main>
        );
}
