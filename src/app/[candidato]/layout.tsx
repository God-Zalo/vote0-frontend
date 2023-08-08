import { Inter } from "next/font/google";
import Link from "next/link";
import { Fragment } from "react";

const inter = Inter({ subsets: ["latin"] });

// async function getCandidato({
//   params,
// }: {
//   params: {
//     id: number;
//     display_name: string;
//     url_name: string;
//     hero_banner1: string;
//     hero_banner2: string;
//     hero_banner3: string;
//     hero_banner4: string;
//     resumen: string;
//   };
// }) {}

export const metadata = {
  title: "Vote0 - App",
  description: "App to register data",
};

export default async function Layout_Candidato({
  children,
  
}: {
  children: React.ReactNode;
}) {

  return (
    <main>
      <div>
        <Link
          href={"/historicos/votaciones/alcaldes"}
          className="text-white bg-blue-300 hover:bg-blue-400 focus:ring-4 focus:ring-blue-100 font-medium rounded-lg text-sm mt-5 px-5 py-2.5 w-3/4 max-w-xs text-center self-center container mx-auto"
          type="button"
        >
          Login
        </Link>
        <Link
          href={"/historicos/votaciones/gobernadores"}
          className="text-white bg-blue-300 hover:bg-blue-400 focus:ring-4 focus:ring-blue-100 font-medium rounded-lg text-sm mt-5 px-5 py-2.5 w-3/4 max-w-xs text-center self-center container mx-auto"
          type="button"
        >
          Boton 2
        </Link>
        <Link
          href={"/historicos/votaciones/asamblea"}
          className="text-white bg-blue-300 hover:bg-blue-400 focus:ring-4 focus:ring-blue-100 font-medium rounded-lg text-sm mt-5 px-5 py-2.5 w-3/4 max-w-xs text-center self-center container mx-auto"
          type="button"
        >
          Boton 3
        </Link>
      </div>
      <div>{children}</div>
    </main>
  );
}
