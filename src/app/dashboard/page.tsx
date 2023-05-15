import Image from "next/image";
import formImage from "../../../public/voting-box.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center">
      <form className="bg-white flex rounded-lg w-full lg:w-1/2">
        <div className="flex-1 text-gray-700 p-5 pg:p-20">
          <h1 className="text-3xl pb-2 fo">Dashboard</h1>
          <p>Seleccione la opción</p>
          <div className="mt-6 items-center justify-center">
            {/* <div className="pb-4">
              <label className="block text-sm pb-2" htmlFor="name">
                Name
              </label>
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-full active:border-teal-500 active:ring-teal-500"
                type="text"
                name="name"
                placeholder="Enter your name"
              ></input>
            </div> */}
            {/* <div className="pb-4">
              <label className="block text-sm pb-2" htmlFor="name">
                Campaña
              </label>
              <select
                name="Option"
                className="border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500"
              >
                <option>Campaña 1</option>
                <option>Campaña 2</option>
                <option>Campaña 3</option>
                <option>Campaña 4</option>
              </select>
            </div> */}
            <Link
              href={"/dashboard"}
              className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm mt-5 px-5 py-2.5 w-full text-center"
              type="button"
            >
              Ver datos
            </Link>
            <Link
              href={"/dashboard"}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm mt-5 px-5 py-2.5 w-full text-center"
              type="button"
            >
              Gestión de datos
            </Link>
            <Link
              href={"/forms/activities"}
              className="block text-white bg-blue-300 hover:bg-blue-400 focus:ring-4 focus:ring-blue-100 font-medium rounded-lg text-sm mt-5 px-5 py-2.5 w-1/2 text-center self-center"
              type="button"
            >
              Adicionar Actividad
            </Link>
            <Link
              href={"/forms/managers"}
              className="block text-white bg-blue-300 hover:bg-blue-400 focus:ring-4 focus:ring-blue-100 font-medium rounded-lg text-sm mt-5 px-5 py-2.5 w-1/2 text-center self-center"
              type="button"
            >
              Adicionar Manager
            </Link>
            <Link
              href={"/forms/campaigns"}
              className=" block text-white bg-blue-300 hover:bg-blue-400 focus:ring-4 focus:ring-blue-100 font-medium rounded-lg text-sm mt-5 px-5 py-2.5 w-1/2 text-center self-center"
              type="button"
            >
              Adicionar Campaña
            </Link>
            <Link
              href={"/forms/coordinators"}
              className=" block text-white bg-blue-300 hover:bg-blue-400 focus:ring-4 focus:ring-blue-100 font-medium rounded-lg text-sm mt-5 px-5 py-2.5 w-1/2 text-center self-center"
              type="button"
            >
              Adicionar Coordinador
            </Link>
            <Link
              href={"/forms/leads"}
              className=" block text-white bg-blue-300 hover:bg-blue-400 focus:ring-4 focus:ring-blue-100 font-medium rounded-lg text-sm mt-5 px-5 py-2.5 w-1/2 text-center self-center"
              type="button"
            >
              Adicionar Lead
            </Link>
            <Link
              href={"/forms/referreds"}
              className=" block text-white bg-blue-300 hover:bg-blue-400 focus:ring-4 focus:ring-blue-100 font-medium rounded-lg text-sm mt-5 px-5 py-2.5 w-1/2 text-center self-center"
              type="button"
            >
              Adicionar Referido
            </Link>
          </div>
        </div>
      </form>
    </main>
  );
}
