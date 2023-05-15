import Image from "next/image";
import formImage from "../../../public/voting-box.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center">
      <form className="bg-white flex rounded-lg w-1/2">
        <div className="flex-1 text-gray-700 p-20">
          <h1 className="text-3xl pb-2 fo">Vote 0 </h1>
          <p>Please log in</p>
          <div className="mt-6">
            <div className="pb-4">
              <label className="block text-sm pb-2" htmlFor="user">
                Username
              </label>
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-full active:border-teal-500 active:ring-teal-500"
                type="text"
                name="user"
                placeholder="Enter your username"
              ></input>
            </div>
            <div className="pb-4">
              <label className="block text-sm pb-2" htmlFor="password">
                Password
              </label>
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-full active:border-teal-500 active:ring-teal-500"
                type="password"
                name="user"
                placeholder="Enter your password"
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
              Login
            </Link>
          </div>
        </div>
        <div className="relative flex-1 self-center justify-self-center pr-20">
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
