"use client";

import Image from "next/image";
import formImage from "../../../public/voting-box.png";
import Link from "next/link";
import { useState, useEffect } from "react";
import { data } from "autoprefixer";
import { Inter } from "next/font/google";

export default function Home() {
  const [firstName, setFirstName] = useState("Leadingo");
  const [lastName, setLastName] = useState("Jobs");
  const [age, setAge] = useState(60);
  const [gender, setGender] = useState("HOMBRE");
  const [email, setEmail] = useState("dingo.chamba@email.com");
  const [phone, setPhone] = useState("3137787878");
  const [id, setId] = useState("798898998");

  const [coordinators, setCoordinators] = useState<
    { id: number; first_name: string; last_name: string }[]
  >([]);
  const [selectedCoordinator, setSelectedCoordinator] = useState("");

  const genderData = [
    { id: "HOMBRE", name: "Hombre" },
    { id: "MUJER", name: "Mujer" },
    { id: "OTRO", name: "Otro" },
  ];

  useEffect(() => {
    fetch("http://192.168.1.107:8000/api/coordinators/")
      .then((res) => res.json())
      .then((data) => {
        setCoordinators(data);
        setSelectedCoordinator(`${data[0].first_name} ${data[0].last_name}`);
      });
  }, []);

  const submitLead = async () => {
    debugger;
    const response = await fetch("http://192.168.1.107:8000/api/leads/new/", {
      method: "POST",
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        age: age,
        gender: gender,
        email: email,
        phone: phone,
        citizen_id: id,
        coordinator: selectedCoordinator,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (!res.ok) {
          return res.text().then((text) => {
            throw new Error(text);
          });
        } else {
          alert("Saved");
        }
        console.log("res", res);
      })
      .catch((err) => {
        alert("error");
        console.log("err", err);
      });

    // const data = await response.json();
    // console.log(data);
  };

  return (
    <main className="flex items-center justify-center">
      <form className="bg-white flex rounded-lg w-5/6 md:w-3/4 lg:w-1/2 container mx-auto overflow-auto">
        <div className="flex-1 text-gray-700 p-5 md:p-10">
          <h1 className="text-3xl pb-2 fo">Agregar Lider</h1>
          <p>Por favor ingrese datos de lead</p>
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
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              ></input>
            </div>

            <div className="pb-4">
              <label className="block text-sm pb-2" htmlFor="lastName">
                Apellido
              </label>
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-full active:border-teal-500 active:ring-teal-500"
                type="text"
                name="lastName"
                placeholder="Ingrese apellido"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              ></input>
            </div>

            <div className="pb-4">
              <label className="block text-sm pb-2" htmlFor="age">
                Edad
              </label>
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-full active:border-teal-500 active:ring-teal-500"
                type="number"
                name="age"
                placeholder="Ingrese edad"
                value={age}
                onChange={(e) => setAge(parseInt(e.target.value))}
              ></input>
            </div>

            <div className="pb-4">
              <label className="block text-sm pb-2" htmlFor="gender">
                Genero
              </label>
              <select
                id="gender"
                name="gender"
                value={gender}
                className="border-2 border-gray-500 p-2 rounded-md w-full active:border-teal-500 active:ring-teal-500"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              >
                {genderData.map((gender) => {
                  return (
                    <option key={gender.id} value={gender.id}>
                      {gender.name}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="pb-4">
              <label className="block text-sm pb-2" htmlFor="email">
                e-Mail
              </label>
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-full active:border-teal-500 active:ring-teal-500"
                type="text"
                name="email"
                placeholder="Ingrese e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>

            <div className="pb-4">
              <label className="block text-sm pb-2" htmlFor="phone">
                Número de teléfono
              </label>
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-full active:border-teal-500 active:ring-teal-500"
                type="text"
                name="phone"
                placeholder="Ingrese número de teléfono"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              ></input>
            </div>

            <div className="pb-4">
              <label className="block text-sm pb-2" htmlFor="id">
                Número de identificación
              </label>
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-full active:border-teal-500 active:ring-teal-500"
                type="text"
                name="id"
                placeholder="Ingrese número de identificación"
                value={id}
                onChange={(e) => setId(e.target.value)}
              ></input>
            </div>

            <div className="pb-4">
              <label className="block text-sm pb-2" htmlFor="coordinator">
                Coordinador
              </label>
              <select
                id="coordinator"
                name="coordinator"
                value={selectedCoordinator}
                className="border-2 border-gray-500 p-2 rounded-md w-full active:border-teal-500 active:ring-teal-500"
                onChange={(e) => {
                  setSelectedCoordinator(e.target.value);
                }}
              >
                {coordinators.map((coordinator) => {
                  return (
                    <option
                      key={coordinator.id}
                      value={`${coordinator.first_name} ${coordinator.last_name}`}
                    >
                      {`${coordinator.first_name} ${coordinator.last_name}`}
                    </option>
                  );
                })}
              </select>
            </div>

            <button
              onClick={submitLead}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm mt-5 px-5 py-2.5 w-full text-center max-w-xs container mx-auto"
            >
              Guardar
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
