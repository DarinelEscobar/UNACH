import { Link } from 'react-router-dom';
import arrowselector from '../assets/img/Icon/arrow.svg';
import Header from '../atoms/Header';
import VerticalText from '../atoms/VerticalText';
import ClaveDeAcceso from '../atoms/ClaveDeAcceso';
import Footer from '../atoms/Footer';
import logoSinNadita from "../assets/img/Icon/checkSinNada.svg";
import logoSave from "../assets/img/Icon/Save.svg";
import "../assets/css/botoncito.css";

function Seccion2Pag1() {
    return (
        <>
            <Header />
            <div className="flex font-sans">
                <div className="flex hidden lg:block lg:w-1/6 lg:justify-center lg:mt-20 lg:mb-20">
                    <VerticalText />
                </div>

                <div className='flex flex-col w-full lg:w-5/6 bg-white rounded-tl-lg'>
                    <div>
                        <ClaveDeAcceso />
                    </div>

                    <div className='text-center'>
                        <p className='font-bold text-gray-700 text-base mt-9 lg:text-xl'>PROTOCOLO DEL PROYECTO <br /> </p>
                        <p className='text-base text-gray-700'>Si el proyecto tiene financiamiento externo, para realizar su trámite de registro NO es necesario llenar esta sección 2, solo adjunte copia del protocolo aprobado por la instancia financiadora, la notificación de aprobación y copia del convenio o carta de asignación de curso que indique el monto de financiamiento y la vigencia. </p>
                    </div>

                    <div className='text-center font-bold mt-5 mb-2 lg:mb-0'>
                        <p className='text-[#BCB785] text-4xl '>Sección 2: <br />Protocolo del proyecto</p>
                    </div>

                    <div class="flex items-center place-content-around text-center w-full lg:mt-5">
                        <img src={logoSinNadita} className='h-[40px] ml-2 lg:h-[50px] md:h-[40px] sm:h-[40px] xl:h-[50px] lg:ml-[20px] xl:ml-6 lg:ml-4'></img>

                        <div className='flex flex-col w-full items-center'>
                            <simple-input class="w-[80%] lg:w-[90%] xl:w-[90%] md:w-[87%] sm:w-[84%]" height="30px" placeholder="Título del proyecto" id=""></simple-input>
                        </div>

                        <button><img src={logoSave} className='h-[30px] mr-2 lg:w-[40px] lg:h-[50px] md:ml-10 md:mr-7 md:h-[30px] md:mr-[10px] sm:h-[30px] lg:mr-[30px] xl:mr-[35px]'></img></button>
                    </div>

                    <div class="flex items-center place-content-around text-center w-full mt-10 lg:mt-[35px]">
                    <img src={logoSinNadita} className='h-[40px] ml-2 lg:h-[50px] md:h-[40px] sm:h-[40px] xl:h-[50px] xl:ml-2 lg:ml-4'></img>

                        <div className="bg-[#BCB785] w-[86%] sm:w-[87%] lg:w-[85%] md:w-[89%] xl:w-[83%] text-white p-3 rounded-md items-center">
                            <p className='text-xl lg:text-3xl'>2.1 Resumen ejecutivo</p>
                        </div>

                        <button><img src={logoSave} className='h-[40px] w-[30px] lg:w-[40px] lg:h-[50px] md:h-[30px] md:mr-[10px] sm:h-[30px] xl:mr-[10px]'></img></button>
                    </div>

                    <div className='text-center'>
                        <p className='font-bold text-gray-500 text-base lg:text-xl'>Máximo 250 palabras</p>
                    </div>

                    <div className='flex flex-col w-full items-center'>
                        <simple-textarea class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" height="150px" type="text" placeholder="Especifique" id="textareaInput1"></simple-textarea>
                    </div>

                    <div class="flex items-center place-content-around text-center w-full mt-7 lg:mt-[35px]">
                    <img src={logoSinNadita} className='h-[40px] ml-2 lg:h-[50px] md:h-[40px] sm:h-[40px] xl:h-[50px] xl:ml-2 lg:ml-4'></img>

                        <div className="bg-[#BCB785] w-[86%] sm:w-[87%] lg:w-[85%] md:w-[89%] xl:w-[83%] text-white p-3 rounded-md items-center">
                            <p className='text-xl lg:text-3xl'>2.2 Introducción</p>
                        </div>

                        <button><img src={logoSave} className='h-[40px] w-[30px] lg:w-[40px] lg:h-[50px] md:h-[30px] md:mr-[10px] sm:h-[30px] xl:mr-[10px]'></img></button>
                    </div>

                    <div className='text-center'>
                        <p className='font-bold text-gray-500 text-base lg:text-xl'>Máximo 300 palabras</p>
                    </div>

                    <div className='flex flex-col w-full items-center'>
                        <simple-textarea class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" height="150px" type="text" placeholder="Especifique" id="textareaInput1"></simple-textarea>
                    </div>

                    <div className='flex place-content-around mt-10 mb-10 lg:mt-24'>
                        <Link to="/seccion1Pag5">
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
                                    <Link to="/seccion2Pag2"><p className='text-2xl lg:text-3xl'>Siguiente</p></Link>
                                </div>
                            </div>
                        </button>
                        <div className='flex'>
                            <p className='grid bg-[#BCB785] w-[4rem] h-[3rem] place-content-center text-white text-xl rounded-md lg:text-3xl lg:h-[4rem] lg:w-[6rem]'>1 - 10</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Seccion2Pag1;