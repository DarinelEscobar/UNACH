import React from 'react';
import { getItem } from '../../utils/storage';

function Table1_9() {
    const CP = getItem('currentProyect') || {};

    return (
        <>
            <div className="h-auto w-full flex-col items-center justify-center transition ease-in-out delay-150 hover:-translate-y-10 hover:overflow hover:scale-110 duration-500 mt-14">
                <div className='rounded-full bg-white flex rounded-full drop-shadow-lg items-center justify-center'>
                    <h1 className="sm:text-sm text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
                        1.9. Formación de personas en investigación
                    </h1>
                </div>

                <div className="flex w-full p-6 overflow-x-auto">
                    <table className="border-separate border-spacing-2 border border-slate-900 border-b-blue-900 w-full table-auto border-gray-300 bg-white drop-shadow-lg rounded-lg border-gray-300">
                        <thead>
                            <tr>
                                <th className="p-4 border  rounded-lg border-gray-400 border border-gray-300 font-semibold">Nombre de participante</th>
                                <th className="p-4 border  rounded-lg border-gray-400">Tipo de participante</th>
                                <th className="p-4 border  rounded-lg border-gray-400">Producto esperado</th>
                                <th className="p-4 border  rounded-lg border-gray-400">Especifique</th>
                            </tr>
                        </thead>
                        <tbody>
                            {CP.research_training_students && CP.research_training_students.map((participant, index) => (
                                <tr key={index}>
                                    <td className="p-4 border  rounded-lg border-gray-400">{participant.id || ""}</td>
                                    <td className="p-4 border  rounded-lg border-gray-400">{participant.type || ""}</td>
                                    <td className="p-4 border  rounded-lg border-gray-400">{participant.expected_product || ""}</td>
                                    <td className="p-4 border  rounded-lg border-gray-400">{participant.Especifique || ""}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Table1_9;
