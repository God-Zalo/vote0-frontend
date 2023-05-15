import Image from "next/image";
import formImage from "../../../public/voting-box.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center">
      <form className="bg-white flex flex-wrap-reverse rounded-lg w-5/6 sm:w-3/4 md:w-3/4 container mx-auto overflow-auto">
        <div className="text-gray-700 p-5 md:p-10 lg:p-10 w-11/12 md:w-fill md:max-w-md mx-auto">
          <h1 className="text-3xl pb-2 fo">Intención de voto</h1>
          <p>Por favor inicie sesión</p>
          <div className="mt-6">
            <div className="pb-4">
              <label className="block text-sm pb-2" htmlFor="user">
                Usuario
              </label>
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-full active:border-teal-500 active:ring-teal-500"
                type="text"
                name="user"
                placeholder="Ingrese su usuario"
              ></input>
            </div>
            <div className="pb-4">
              <label className="block text-sm pb-2" htmlFor="password">
                Contraseña
              </label>
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-full active:border-teal-500 active:ring-teal-500"
                type="password"
                name="user"
                placeholder="Ingrese su contraseña"
              ></input>
            </div>
            {/* <button
              type="submit"
              className="bg-teal-500 text-sm text-white py-3 mt-6 rounded-sm w-full"
            >
              Login
            </button> */}
            <Link
              href={"/dashboard"}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm mt-5 px-5 py-2.5 w-full text-center"
              type="button"
            >
              Ingresar
            </Link>
          </div>
        </div>
        <div className="relative container mx-auto p-10 max-w-xs">
          <Image
            alt="Vote"
            src={formImage}
            className="object-cover rounded-lg"
          ></Image>
        </div>
      </form>
    </main>
  );
}
