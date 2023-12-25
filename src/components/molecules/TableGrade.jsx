import React from 'react';
import { getItem } from '../../utils/storage';

function TableGrade() {
    const CP = getItem('currentProyect') || {};

    return (
      <div className="flex overflow-y-auto w-full  h-fit">
          <div className=" flex-col items-center justify-center">
              <div className='flex-col rounded-lg md:rounded-full lg:rounded-full bg-white drop-shadow-lg items-center justify-center m-8 px-10'>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-4 text-center">
                      CRITERIOS PARA EVALUACIÓN DE INFORMES TÉCNICOS DE INVESTIGACIÓN
                  </h1>
                  <label className="text-base sm:text-sm md:text-xl lg:text-2xl xl:text-2xl font-bold text-gray-800 text-center py-9">
                      Estos criterios son usados para el proceso de dictamen de informes técnicos de investigación, en la modalidad de “doble ciego”.
                      Valore cada criterio, y emita su dictamen al finalizar.
                  </label>
              </div>

              <div className="flex w-full p-5 mb-10 overflow-x-auto ">
                  <table className="border-separate border-spacing-2 border border-slate-900 border-b-blue-900 w-full table-auto border-gray-300 bg-white drop-shadow-lg rounded-lg border-gray-300">
                      <tbody>
                          <tr>
                              <th className="p-4 border rounded-lg border-gray-400">Título de proyecto</th>
                              <td className="p-4 border rounded-lg border-gray-400">
                                  {CP.title_project}
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
  );
}

export default TableGrade;
