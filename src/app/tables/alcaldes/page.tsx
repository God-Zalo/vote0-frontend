
"use client"; 
import Link from "next/link";
import AlcaldeTable from "@/app/shared/alcaldeTable";
import ErrorPage from "@/app/shared/error";
import data from "../../../../public/data/alcaldes.json"
import { useState } from 'react';


export default function Alcaldes() {

  const options = [
    { value: 'municipio', label: 'Buscar por Municipio' },
    { value: 'codigo', label: 'Buscar por Código' },
    { value: 'candidato', label: 'Buscar por  Candidato' },
  ];

  const [alcaldesInfo, setAlcaldesInfo] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [errorPage, setErrorPage] = useState(false)
  const [selectedOption, setSelectedOption] = useState(options[0]);
  
  const handleOptionChange = (option: any) => {
    setSelectedOption(option);
  };

  const handleSearch = (event: any) => {
    setErrorPage(false);
    setAlcaldesInfo(data);
    setSearchTerm(event.target.value.toLowerCase());
    
    let searchHolder:any;
    if(event.target.value.length){
      if(selectedOption.value === 'municipio'){
        searchHolder = alcaldesInfo.filter((element: any) => {
          return (
            element.municipio.toLowerCase().trim().includes(searchTerm)
          )
        })
      } else if (selectedOption.value === 'codigo') {
        searchHolder = alcaldesInfo.filter((element: any) => {
          return (
            element.codigo.trim().includes(searchTerm)
          )
        })
      } else if (selectedOption.value === 'candidato'){
        searchHolder = alcaldesInfo.filter((element: any) => {
          return (
            element.candidato.toLowerCase().trim().includes(searchTerm) 
          )
        })
      }
      searchHolder.length ? setAlcaldesInfo(searchHolder) : setErrorPage(true);
      
    } else {setAlcaldesInfo(data); setErrorPage(false);}
  };

  const tableHeaders = ['Año', 'Municipio', 'Código', 'Candidato', 'Partido', 'Coaliacion', 'Votos', 'Genero', 'Current']
  return (
    <div className="mx-auto px-4 w-3/4 min-w-3/4">

    {/* Search */}
      <div className="flex items-center justify-center pb-8 pt-8">
        <input
          type="text"
          className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 w-1/4 min-w-1/4 mx-4"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={handleSearch}
        />
      <select
        value={selectedOption.value}
        onChange={(event) => handleOptionChange(options.find((option) => option.value === event.target.value))}
        className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 w-1/4 min-w-1/4 mr-4"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
        <button className="px-4 py-2 ml-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none rounded-lg ">
          Buscar
        </button>
      </div>
    {/* Search */}
    {errorPage ? <ErrorPage errorText="No se encontraron resultados con los términos de busqueda"/> : (
      <AlcaldeTable 
        tableHeaders={tableHeaders}
        alcaldesInfo={alcaldesInfo}
      />
    )}
    
    </div>
  );
}
