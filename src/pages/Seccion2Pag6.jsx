import { Link } from 'react-router-dom';
import arrowselector from '../assets/img/Icon/arrow.svg';
import Header from '../atoms/Header';
import VerticalText from '../atoms/VerticalText';
import ClaveDeAcceso from '../atoms/ClaveDeAcceso';
import Footer from '../atoms/Footer';
import logoSinNadita from "../assets/img/Icon/checkSinNada.svg";
import logoSave from "../assets/img/Icon/Save.svg";
import "../assets/css/botoncito.css";

function Seccion2Pag6() {
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
                    <div class="flex items-center place-content-around text-center w-full mt-10 lg:mt-20">
                        <img src={logoSinNadita} className='h-10 lg:h-20'></img>
                        <div className="bg-[#BCB785] w-5/6 text-white p-3 rounded-md">
                            <p className='text-xl lg:text-3xl'>2.11 Metodología</p>
                        </div>
                        <button><img src={logoSave} className='h-10 lg:h-20'></img></button>
                    </div>

                    <div className='flex flex-col w-full'>
                        <simple-input class="ml-[30px] lg:ml-[90px]" width="89%" placeholder="Tipo de financiamiento" id=""></simple-input>
                        <simple-input class="ml-[30px] lg:ml-[90px]" width="89%" placeholder="Institución/fuente" id=""></simple-input>
                        <simple-input class="ml-[30px] lg:ml-[90px]" width="89%" placeholder="Convocatoria/programa" id=""></simple-input>
                        <simple-input class="ml-[30px] lg:ml-[90px]" width="89%" placeholder="Enlace de la convocatoria" id=""></simple-input>
                        <simple-input class="ml-[30px] lg:ml-[90px]" width="89%" placeholder="Año de la convocatoria" id=""></simple-input>
                        <simple-input class="ml-[30px] lg:ml-[90px]" width="89%" placeholder="Instancia dictaminadora" id=""></simple-input>

                        <div className='text-center w-5/6 ml-10 lg:ml-[85px]'>
                            <p className='font-bold text-gray-500  text-base lg:text-xl mt-5 mb-5'>Consentimiento informado -Describir la forma en la que los participantes aceptan participar libremente en el desarrollo de la propuesta</p>
                        </div>
                        
                        <simple-input class="ml-[30px] lg:ml-[90px]" width="89%" height="30px" placeholder="Escribir aquí" id="" ></simple-input>

                        <div className='text-center w-5/6 ml-10 lg:ml-[85px]'>
                            <p className='font-bold text-gray-500  text-base lg:text-xl mt-5 mb-5'>Comités éticos, bioéticas y/o debioseguridad Indicar si algún Comité ha avalado la propuesta *indispensable para investigaciones en ciencias de la salud</p>
                        </div>

                        <simple-input class="ml-[30px] lg:ml-[90px]" width="89%" height="30px" placeholder="Escribir aquí" id=""></simple-input>

                    </div>

                    <div className='flex place-content-around mt-10 mb-10 lg:mt-24'>
                        <Link to="/seccion2Pag5">
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
                                    <Link to="/seccion2Pag7"><p className='text-2xl lg:text-3xl'>Siguiente</p></Link>
                                </div>
                            </div>
                        </button>
                        <div className='flex'>
                            <p className='grid bg-[#BCB785] w-[4rem] h-[3rem] place-content-center text-white text-xl rounded-md lg:text-3xl lg:h-[4rem] lg:w-[6rem]'>6 - 10</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Seccion2Pag6;