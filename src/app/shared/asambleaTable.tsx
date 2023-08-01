import { useState } from 'react';
export default function AsambleaTable (props: any) {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    console.log(props.asambleaInfo)
    const currentItems = props.asambleaInfo.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };
    
    return (
        <main className="flex items-center justify-center">
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 table-fixed w-3/4 min-w-3/4 mx-auto">
            <thead className="bg-gray-50">
                <tr>
                {props.tableHeaders.map((header: any) => (
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {header}
                    </th>
                ))}
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {currentItems.map((Asamblea: any, index: any) => (
                <tr key={index}>
                    <td className="px-2 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{Asamblea.year}</div>
                    </td>
                    <td className="px-2 py-4">
                    <div className="text-sm text-gray-900">{Asamblea.municipio}</div>
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{Asamblea.codigo}</div>
                    </td>
                    <td className="px-2 py-4 ">
                    <div className="text-sm text-gray-900">{Asamblea.candidato}</div>
                    </td>
                    <td className="px-2 py-4 ">
                    <div className="text-sm text-gray-900">{Asamblea.partido}</div>
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{Asamblea.coalicion ? 'Sí' : 'No'}</div>
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{Asamblea.votos}</div>
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{Asamblea.genero}</div>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
            <div className="flex mt-4 pb-4">
            <nav className="flex items-center">
                {Array.from({ length: Math.ceil(props.asambleaInfo.length / itemsPerPage) }, (_, index) => (
                <button
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    className={`px-2 py-2 mx-1 rounded-md ${
                    currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                    }`}
                >
                    {index + 1}
                </button>
                ))}
            </nav>
            </div>
        </div>
        </main>

    );
  }