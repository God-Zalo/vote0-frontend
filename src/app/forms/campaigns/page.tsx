"use client";

import { useState, useEffect } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Campaigns() {
  const [campaignName, setCampaignName] = useState("Campaign new 1");
  const [managers, setManagers] = useState<
    { id: number; first_name: string; last_name: string }[]
  >([]);
  const [selectedManager, setSelectedManager] = useState("");
  const [expireDate, setExpireDate] = useState<Date | null>(new Date());

  useEffect(() => {
    fetch("http://192.168.1.107:8000/api/managers/")
      .then((res) => res.json())
      .then((data) => {
        setManagers(data);
      });
  }, []);

  const submitCampaign = async () => {
    const response = await fetch(
      "http://192.168.1.107:8000/api/campaigns/new/",
      {
        method: "POST",
        body: JSON.stringify({
          campaign_name: campaignName,
          manager: selectedManager,
          expire_date: expireDate,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <main className="h-screen flex items-center justify-center">
      <form className="bg-white flex rounded-lg w-1/2">
        <div className="flex-1 text-gray-700 p-20">
          <h1 className="text-3xl pb-2 fo">Adicionar Campaña</h1>
          <p>Por favor ingrese datos de campaña</p>
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
                value={campaignName}
                onChange={(e) => setCampaignName(e.target.value)}
              ></input>
            </div>

            <div className="pb-4">
              <label className="block text-sm pb-2" htmlFor="manager">
                Manager
              </label>
              <select
                id="manager"
                name="manager"
                value={selectedManager}
                className="border-2 border-gray-500 p-2 rounded-md w-full active:border-teal-500 active:ring-teal-500"
                onChange={(e) => {
                  setSelectedManager(e.target.value);
                }}
              >
                {managers.map((manager) => {
                  return (
                    <option
                      key={manager.id}
                      value={`${manager.first_name} ${manager.last_name}`}
                    >
                      {`${manager.first_name} ${manager.last_name}`}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="pb-4">
              <label className="block text-sm pb-2" htmlFor="endDate">
                Fecha de finalización
              </label>
              <DatePicker
                selected={expireDate}
                onChange={(date) => setExpireDate(date)}
              />
            </div>

            <button
              onClick={submitCampaign}
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
