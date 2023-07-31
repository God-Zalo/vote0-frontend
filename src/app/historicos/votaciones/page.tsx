
"use client"; 
import Link from "next/link";
import AlcaldeTable from "@/app/shared/alcaldeTable";
import ErrorPage from "@/app/shared/error";
import data from "../../../../public/data/alcaldes.json"
import { useState, useEffect } from 'react';


export default function Alcaldes() {

  const options = [
    { value: 'municipio', label: 'Buscar por Municipio' },
    { value: 'codigo', label: 'Buscar por Código' },
    { value: 'candidato', label: 'Buscar por  Candidato' },
  ];
  const tableHeaders = ['Año', 'Municipio', 'Código', 'Candidato', 'Partido', 'Coaliacion', 'Votos', 'Genero', 'Current'];

  useEffect(() => {
    const DJANGO_API = process.env.NEXT_PUBLIC_DJANGO_API_DEV
    fetch( `${DJANGO_API}/historic/alcaldes/2019`)
      .then((res) => res.json())
      .then((data) => {
        setAlcaldesHolder(data);
        setAlcaldesInfo(data);
      });
  }, []);

  const [alcaldesInfo, setAlcaldesInfo] = useState([]);
  const [alcaldesHolder, setAlcaldesHolder] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const [errorPage, setErrorPage] = useState(false)
  const [selectedOption, setSelectedOption] = useState(options[0]);
  
  const handleOptionChange = (option: any) => {
    setSelectedOption(option);
    setSearchTerm("");
    setAlcaldesInfo(alcaldesHolder);
    console.log(alcaldesHolder)
    setErrorPage(false)
  };

  const handleInputChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  function searchByOption() {
    if (!searchTerm.trim()) {
      setAlcaldesInfo(alcaldesHolder);
      return []; // Retorna un arreglo vacío si el término de búsqueda es un espacio vacío o solo contiene espacios
    }
  
    // Convierte el término de búsqueda a minúsculas para hacer una búsqueda case-insensitive
    const searchTermLowerCase = searchTerm.toLowerCase();
  
    switch (selectedOption.value) {
      case "partido":
        return alcaldesInfo.filter((item: any) => item.partido.toLowerCase().includes(searchTermLowerCase));
      case "codigo":
        return alcaldesInfo.filter((item: any) => item.codigo.toLowerCase().includes(searchTermLowerCase));
      case "candidato":
        return alcaldesInfo.filter((item: any) => item.candidato.toLowerCase().includes(searchTermLowerCase));
      case "municipio":
        return alcaldesInfo.filter((item: any) => item.municipio.toLowerCase().includes(searchTermLowerCase));
      default:
        return []; // Si el valor de selectedOption no coincide con ninguna opción válida, retorna un arreglo vacío
    }
  }

  const handleSearch = () => {
    const searchResults = searchByOption();
    setAlcaldesInfo(searchResults);
  };


  return (
    <div className="mx-auto px-4 w-3/4 min-w-3/4">

    {/* Search */}
      <div className="flex items-center justify-center pb-8 pt-8">
        <input
          type="text"
          className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 w-1/4 min-w-1/4 mx-4"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={handleInputChange}
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
        <button 
          className="px-4 py-2 ml-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none rounded-lg "
          onClick={handleSearch}
        >
          Buscar
        </button>
      </div>
    {/* Search */}
    {errorPage ? <ErrorPage errorText="No se encontraron resultados con los términos de busqueda"/> : (
      alcaldesInfo && (
        <AlcaldeTable 
          tableHeaders={tableHeaders}
          alcaldesInfo={alcaldesInfo}
        />
      )
    )}
    
    </div>
  );
}
