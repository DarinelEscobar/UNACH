import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import arrowselector from '../assets/img/Icon/arrow.svg';
import Header from '../atoms/Header';
import VerticalText from '../atoms/VerticalText';
import ClaveDeAcceso from '../atoms/ClaveDeAcceso';
import Footer from '../atoms/Footer';
import logoSinNadita from "../assets/img/Icon/checkSinNada.svg";
import "../assets/css/botoncito.css";
import ButtonSaveInfo from '../atoms/ButtonSaveInfo';
import SharedDataContext from '../contexts/SharedDataContext';
import { useContext } from 'react';
import Table from '../atoms/Table';

function Seccion2Pag7() {
    const { isShareData } = useContext(SharedDataContext);

    const ColumnsTable = [
        { id: "activity", title: "Actividades a desarrollar" },
        { id: "expected_product", title: "Producto esperado" },
    ];

    const ColumnsTable2 = [
        { id: "activity", title: "Actividades a desarrollar" },
        { id: "expected_product", title: "Producto esperado" },
    ];

    return (
        <>
            <Header />
            <div className="flex font-sans">
                <div className="flex hidden lg:block lg:w-1/6 lg:justify-center lg:mt-20 lg:mb-20">
                    <VerticalText />
                </div>

                <div className='flex flex-col w-full lg:w-5/6 bg-white lg:rounded-tl-lg'>
                    <div>
                        <ClaveDeAcceso />
                    </div>

                    <div class="flex items-center place-content-around text-center w-full mt-10 lg:mt-20">
                        <img src={logoSinNadita} className='h-[40px] lg:h-[50px] md:h-[40px] sm:h-[40px] xl:h-[40px]'></img>

                        <div className="bg-[#BCB785] w-[86%] sm:w-[87%] lg:w-[85%] md:w-[89%] xl:w-[83%] text-white p-3 rounded-md items-center">
                            <p className='text-xl lg:text-3xl'>2.12 Etapa y actividades</p>
                        </div>

                        {/* TIENES QUE DARLE 2 VECES PARA QUE SE GUARDEN LOS DATOS */}
                        <ButtonSaveInfo />
                    </div>

                    <div className='text-center'>
                        <p className='font-bold text-gray-500 text-base lg:text-xl'>(El proyecto deberá ajustarse a un año de vigencia)</p>
                    </div>

                    <div className='text-center'>
                        <p className='font-bold text-gray-500 text-base lg:text-xl mt-5 mb-5'>*Inserte cuantas filas necesite*</p>
                    </div>

                    <div className='text-center'>
                        <p className='font-bold text-gray-500 text-base lg:text-xl mt-2 mb-5'>Etapa 1</p>
                    </div>

                    <table class="table-auto lg:ml-[90px] text-center w-full lg:w-10/12 mb-10 mt-10">
                        <thead className='bg-[#25313A] h-12 rounded text-white'>
                            <tr>
                                <th>Primer semestre de ejecución</th>
                            </tr>
                        </thead>
                        <tr>
                            <div className='flex flex-col w-full items-center'>
                                <simple-input class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" 
                                height="30px" 
                                placeholder="Inicio(Fecha)" 
                                id="start_date" 
                                value={isShareData.startDate || ''}
                                ></simple-input>
                                <simple-input class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" 
                                height="30px" 
                                placeholder="Fin(Fecha)"
                                id="end_date" 
                                value={isShareData.endDate || ''}
                                ></simple-input>
                            </div>
                        </tr>
                    </table>

                    <Table columns={ColumnsTable} />

                    <div className='text-center mt-10'>
                        <p className='font-bold text-gray-500 text-base lg:text-xl mt-5 mb-5'>Etapa 2</p>
                    </div>

                    {/* ml-[30px] lg:ml-[90px] */}
                    <table class="table-auto lg:ml-[90px] text-center w-full lg:w-10/12 mb-10 mt-10">
                        <thead className='bg-[#25313A] h-12 rounded text-white'>
                            <tr>
                                <th>Segundo semestre de ejecución</th>
                            </tr>
                        </thead>
                        <tr>
                            <div className='flex flex-col w-full items-center'>
                                <simple-input class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" 
                                height="30px" 
                                placeholder="Inicio(Fecha)"
                                id="start_date" 
                                value={isShareData.start_date || ''}
                                ></simple-input>

                                <simple-input class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" 
                                height="30px"
                                placeholder="Fin(Fecha)" 
                                id="end_date" 
                                value={isShareData.end_date|| ''}>
                                </simple-input>
                            </div>
                        </tr>
                    </table >

                    <Table columns={ColumnsTable2} />
                                        
                    <div className='flex place-content-around mt-10 mb-10 lg:mt-24'>
                        <Link to="/seccion2Pag6">
                            <button>
                                <div className='grid'>
                                    <div className='grid place-content-center bg-[#BCB785] w-[3rem] h-[3rem] rounded-md lg:h-[4rem] lg:w-[6rem]'>
                                        <img src={arrowselector}></img>
                                    </div>
                                </div>
                            </button>
                        </Link>
                        <button>
                            <div className='grid'>
                                <div className='grid place-content-center bg-[#BCB785] text-white w-[10rem] h-[3rem] rounded-md lg:h-[4rem] lg:w-[16rem]'>
                                    <Link to="/seccion2Pag8"><p className='text-2xl lg:text-3xl'>Siguiente</p></Link>
                                </div>
                            </div>
                        </button>
                        <div className='flex'>
                            <p className='grid bg-[#BCB785] w-[4rem] h-[3rem] place-content-center text-white text-xl rounded-md lg:text-3xl lg:h-[4rem] lg:w-[6rem]'>7 - 10</p>
                        </div>
                    </div>
                </div >
            </div >
            <Footer />
        </>
    );
}

export default Seccion2Pag7;