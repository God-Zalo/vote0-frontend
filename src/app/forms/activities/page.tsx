"use client";

import Image from "next/image";
import formImage from "../../../public/voting-box.png";
import Link from "next/link";
import { useState } from "react";
import { data } from "autoprefixer";

export default function Home() {
  const [activityName, setActivityName] = useState("act1");
  const [activityDescription, setActivityDescription] = useState("act1desc");

  const submitActivity = async () => {
    // const data = JSON.stringify({
    //   name: activityName,
    //   description: activityDescription,
    // });

    const response = await fetch(
      "http://192.168.1.107:8000/api/activities/new/",
      {
        method: "POST",
        body: JSON.stringify({
          name: activityName,
          description: activityDescription,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <main className="h-screen flex items-center justify-center">
      <form className="bg-white flex rounded-lg w-5/6 md:w-3/4 lg:w-1/2 container mx-auto overflow-auto">
        <div className="flex-1 text-gray-700 p-5 md:p-10">
          <h1 className="text-3xl pb-2 fo">Agregar Actividad</h1>
          <p>Por favor ingrese datos de actividad</p>
          <div className="mt-6 flex flex-col">
            <div className="pb-4">
              <label className="block text-sm pb-2" htmlFor="name">
                Nombre
              </label>
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-full active:border-teal-500 active:ring-teal-500"
                type="text"
                name="name"
                placeholder="Ingrese nombre"
                value={activityName}
                onChange={(e) => setActivityName(e.target.value)}
              ></input>
            </div>

            <div className="pb-4">
              <label className="block text-sm pb-2" htmlFor="desc">
                Descripción
              </label>
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-full active:border-teal-500 active:ring-teal-500"
                type="text"
                name="desc"
                placeholder="Ingrese descripción"
                value={activityDescription}
                onChange={(e) => setActivityDescription(e.target.value)}
              ></input>
            </div>

            <button
              onClick={submitActivity}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm mt-5 px-5 py-5 w-full text-center max-w-xs container mx-auto"
            >
              Guardar
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
