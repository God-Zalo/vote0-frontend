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
          <div>
            <Link
              href={"/historicos/votaciones/alcaldes"}
              className="block text-white bg-blue-300 hover:bg-blue-400 focus:ring-4 focus:ring-blue-100 font-medium rounded-lg text-sm mt-5 px-5 py-2.5 w-3/4 max-w-xs text-center self-center container mx-auto"
              type="button"
              >Alcaldes
            </Link>
            <Link
              href={"/historicos/votaciones/gobernadores"}
              className="block text-white bg-blue-300 hover:bg-blue-400 focus:ring-4 focus:ring-blue-100 font-medium rounded-lg text-sm mt-5 px-5 py-2.5 w-3/4 max-w-xs text-center self-center container mx-auto"
              type="button"
              >Gobernadores
            </Link>
            <Link
              href={"/historicos/votaciones/asamblea"}
              className="block text-white bg-blue-300 hover:bg-blue-400 focus:ring-4 focus:ring-blue-100 font-medium rounded-lg text-sm mt-5 px-5 py-2.5 w-3/4 max-w-xs text-center self-center container mx-auto"
              type="button"
              >Asamblea
            </Link>
          </div>
          <div>{children}</div>
        </main>
        );
}
