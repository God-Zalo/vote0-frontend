"use client";

import Image from "next/image";
import formImage from "../../../public/voting-box.png";
import Link from "next/link";
import { useState, useEffect } from "react";
import { data } from "autoprefixer";
import { Inter } from "next/font/google";

export default function Home() {
  const [firstName, setFirstName] = useState("Refis");
  const [lastName, setLastName] = useState("Kutch");
  const [age, setAge] = useState(20);
  const [gender, setGender] = useState("MUJER");
  const [email, setEmail] = useState("Refis.K@email.com");
  const [phone, setPhone] = useState("3199099108");
  const [id, setId] = useState("545361");
  const [votePlace, setVotePlace] = useState("Corferias");
  const [voteTable, setVoteTable] = useState(232);
  const [neighborhood, setNeighborhood] = useState("Bosa");
  const [address, setAddress] = useState("Calle 123 # 45 33");
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  }>();

  const [leads, setLeads] = useState<
    { id: number; first_name: string; last_name: string }[]
  >([]);
  const [selectedLead, setSelectedLead] = useState("");

  const [coordinators, setCoordinators] = useState<
    { id: number; first_name: string; last_name: string }[]
  >([]);
  const [selectedCoordinator, setSelectedCoordinator] = useState("");

  const [activities, setActivities] = useState<{ id: number; name: string }[]>(
    []
  );
  const [selectedActivity, setSelectedActivity] = useState("");

  const [campaigns, setCampaigns] = useState<
    { id: number; campaign_name: string }[]
  >([]);
  const [selectedCampaign, setSelectedCampaign] = useState("");

  const genderData = [
    { id: "HOMBRE", name: "Hombre" },
    { id: "MUJER", name: "Mujer" },
    { id: "OTRO", name: "Otro" },
  ];

  useEffect(() => {
    fetch("http://192.168.1.107:8000/api/leads/")
      .then((res) => res.json())
      .then((data) => {
        setLeads(data);
        setSelectedLead(`${data[0].first_name} ${data[0].last_name}`);
      });

    fetch("http://192.168.1.107:8000/api/coordinators/")
      .then((res) => res.json())
      .then((data) => {
        setCoordinators(data);
        setSelectedCoordinator(`${data[0].first_name} ${data[0].last_name}`);
      });

    fetch("http://192.168.1.107:8000/api/activities/")
      .then((res) => res.json())
      .then((data) => {
        setActivities(data);
        setSelectedActivity(`${data[0].name}`);
      });

    fetch("http://192.168.1.107:8000/api/campaigns/")
      .then((res) => res.json())
      .then((data) => {
        setCampaigns(data);
        setSelectedCampaign(`${data[0].campaign_name}`);
      });
  }, []);

  useEffect(() => {
    if ("geolocation" in navigator) {
      // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        setLocation({ latitude, longitude });
      });
    }
  }, []);

  const submitReferred = async () => {
    //debugger;
    const response = await fetch(
      "http://192.168.1.107:8000/api/refereds/new/",
      {
        method: "POST",
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          age: age,
          gender: gender,
          email: email,
          phone: phone,
          citizen_id: id,
          vote_place: votePlace,
          vote_table: voteTable,
          neighborhood: neighborhood,
          address: address,
          lat_reg: location?.latitude,
          lng_reg: location?.longitude,
          lead: selectedLead,
          coordinator: selectedCoordinator,
          activity: selectedActivity,
          campaign: selectedCampaign,
          evidence: null,
        }),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => {
        if (!res.ok) {
          debugger;
          return res.text().then((text) => {
            throw new Error(text);
          });
        } else {
          alert("Saved");
        }
        console.log("res", res);
      })
      .catch((err) => {
        debugger;
        alert("error");
        console.log("err", err);
      });

    // const data = await response.json();
    // console.log(data);
  };

  return (
    <main className="h-screen flex items-start justify-center">
      <form className="bg-white flex rounded-lg w-1/2">
        <div className="flex-1 text-gray-700 p-20">
          <h1 className="text-3xl pb-2 fo">Adicionar Referido</h1>
          <p>Por favor ingrese datos de referido</p>
          <div className="mt-6">
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
              <label className="block text-sm pb-2" htmlFor="votePlace">
                Puesto de votación
              </label>
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-full active:border-teal-500 active:ring-teal-500"
                type="text"
                name="votePlace"
                placeholder="Ingrese puesto de votación"
                value={votePlace}
                onChange={(e) => setVotePlace(e.target.value)}
              ></input>
            </div>

            <div className="pb-4">
              <label className="block text-sm pb-2" htmlFor="voteTable">
                Mesa de votación
              </label>
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-full active:border-teal-500 active:ring-teal-500"
                type="text"
                name="voteTable"
                placeholder="Ingrese mesa de votación"
                value={voteTable}
                onChange={(e) => setVoteTable(parseInt(e.target.value))}
              ></input>
            </div>

            <div className="pb-4">
              <label className="block text-sm pb-2" htmlFor="neighborhood">
                Barrio
              </label>
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-full active:border-teal-500 active:ring-teal-500"
                type="text"
                name="neighborhood"
                placeholder="Ingrese barrio"
                value={neighborhood}
                onChange={(e) => setNeighborhood(e.target.value)}
              ></input>
            </div>

            <div className="pb-4">
              <label className="block text-sm pb-2" htmlFor="address">
                Dirección
              </label>
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-full active:border-teal-500 active:ring-teal-500"
                type="text"
                name="address"
                placeholder="Ingrese dirección"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></input>
            </div>

            <div className="pb-4">
              <label className="block text-sm pb-2" htmlFor="lead">
                Lead
              </label>
              <select
                id="lead"
                name="lead"
                value={selectedLead}
                className="border-2 border-gray-500 p-2 rounded-md w-full active:border-teal-500 active:ring-teal-500"
                onChange={(e) => {
                  setSelectedLead(e.target.value);
                }}
              >
                {leads.map((lead) => {
                  return (
                    <option
                      key={lead.id}
                      value={`${lead.first_name} ${lead.last_name}`}
                    >
                      {`${lead.first_name} ${lead.last_name}`}
                    </option>
                  );
                })}
              </select>
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

            <div className="pb-4">
              <label className="block text-sm pb-2" htmlFor="activity">
                Activity
              </label>
              <select
                id="activity"
                name="activity"
                value={selectedActivity}
                className="border-2 border-gray-500 p-2 rounded-md w-full active:border-teal-500 active:ring-teal-500"
                onChange={(e) => {
                  setSelectedActivity(e.target.value);
                }}
              >
                {activities.map((activity) => {
                  return (
                    <option key={activity.id} value={`${activity.name}`}>
                      {`${activity.name}`}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="pb-4">
              <label className="block text-sm pb-2" htmlFor="campaign">
                Campaign
              </label>
              <select
                id="campaign"
                name="campaign"
                value={selectedCampaign}
                className="border-2 border-gray-500 p-2 rounded-md w-full active:border-teal-500 active:ring-teal-500"
                onChange={(e) => {
                  setSelectedCampaign(e.target.value);
                }}
              >
                {campaigns.map((campaign) => {
                  return (
                    <option
                      key={campaign.id}
                      value={`${campaign.campaign_name}`}
                    >
                      {`${campaign.campaign_name}`}
                    </option>
                  );
                })}
              </select>
            </div>

            {/* <button
              onClick={submitReferred}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm mt-5 px-5 py-2.5 w-full text-center"
            >
              Tomar Evidencia
            </button> */}

            <button
              onClick={submitReferred}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm mt-5 px-5 py-2.5 w-full text-center"
            >
              Guardar
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
