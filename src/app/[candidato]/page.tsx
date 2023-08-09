"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

interface Content {
  // Define the structure of your content here
    id: number;
    display_name: string;
    url_name: string;
    hero_banner1: string;
    hero_banner2: string;
    hero_banner3: string;
    hero_banner4: string;
    resumen: string;
}

export default function Candidato() {

  const [content, setContent] = useState<Content | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/candidate/yovotopepito');
        const data: Content = await response.json();
        setContent(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchContent();
  }, []);

  const searchParams = useSearchParams();
  const nombre = searchParams.get('nombre')
  console.log(nombre)

  const [formData, setFormData] = useState({
    email: "",
    citizen_id: "",
    first_name: "",
    last_name: "",
    phone: "",
    role: 'voluntario',
    candidato: nombre,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log(formData)

    try {
      const response = await fetch("/candidate/info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Aquí podemos redirigir cuando se complete el request, o mostramos un aprobado y limpiamos el form
        
      } else {
        // Lo contrario a lo de arriba kkkk
        console.error("Error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <div>
      {/* Render your component content here */}
      {content && (
        <div>
          {/* Access and display the fetched content */}
          <h1>{content.id}</h1>
          <p>{content.display_name}</p>
          <Image alt="asd" src={"http://127.0.0.1:8000/"+content.hero_banner1} width={100} height={100}></Image>
        </div>
      )}
      <div className="mt-8">
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto bg-blue-50 p-6 rounded-lg shadow-md">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full p-2 border border-blue-300 rounded-md mb-4 focus:ring focus:ring-blue-200 focus:border-blue-400 text-black"
          />
          <input
            type="number"
            name="citizen_id"
            placeholder="Identificación"
            value={formData.citizen_id}
            onChange={handleInputChange}
            required
            className="w-full p-2 border border-blue-300 rounded-md mb-4 focus:ring focus:ring-blue-200 focus:border-blue-400 text-black"
          />
          <input
            type="text"
            name="first_name"
            placeholder="Primer Nombre"
            value={formData.first_name}
            onChange={handleInputChange}
            required
            className="w-full p-2 border border-blue-300 rounded-md mb-4 focus:ring focus:ring-blue-200 focus:border-blue-400 text-black"
          />
          <input
            type="text"
            name="last_name"
            placeholder="Apellido"
            value={formData.last_name}
            onChange={handleInputChange}
            required
            className="w-full p-2 border border-blue-300 rounded-md mb-4 focus:ring focus:ring-blue-200 focus:border-blue-400 text-black"
          />
          <input
            type="text"
            name="phone"
            placeholder="Número telefónico"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full p-2 border border-blue-300 rounded-md mb-4 focus:ring focus:ring-blue-200 focus:border-blue-400 text-black"
          />
          <select
            name="role"
            value="voluntario"
            disabled
            className="w-full p-2 border border-blue-300 rounded-md mb-4 focus:ring focus:ring-blue-200 focus:border-blue-400 bg-gray-100 text-black"
          >
            <option value="voluntario">Voluntario</option>
          </select>
          <input
            type="text"
            name="candidato"
            placeholder={nombre || ''}
            onChange={handleInputChange}
            className="w-full p-2 border border-blue-300 rounded-md mb-4 focus:ring focus:ring-blue-200 focus:border-blue-400 text-black"
          />
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm mt-5 px-5 py-2.5 w-full text-center"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};