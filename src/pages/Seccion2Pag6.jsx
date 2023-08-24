import { Link } from 'react-router-dom';
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
function Seccion2Pag6() {
    const { isShareData } = useContext(SharedDataContext);
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
                            <p className='text-xl lg:text-3xl'>2.11 Metodología</p>
                        </div>

                        {/* TIENES QUE DARLE 2 VECES PARA QUE SE GUARDEN LOS DATOS */}
                        <ButtonSaveInfo />
                    </div>

                    <div className='flex flex-col w-full items-center'>
                        <simple-input class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" height="30px" placeholder="Tipo de financiamiento" id="funding_type" value={isShareData.funding_type || ''}></simple-input>
                        <simple-input class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" height="30px" placeholder="Institución/fuente" id="funding_source_institution" value={isShareData.funding_source_institution || ''}></simple-input>
                        <simple-input class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" height="30px" placeholder="Convocatoria/programa" id="program" value={isShareData.program || ''}></simple-input>
                        <simple-input class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" height="30px" placeholder="Enlace de la convocatoria" id="program_link" value={isShareData.program_link || ''}></simple-input>
                        <simple-input class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" height="30px" placeholder="Año de la convocatoria" id="year" value={isShareData.year || ''}></simple-input>
                        <simple-input class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" height="30px" placeholder="Instancia dictaminadora" id="evaluating_instance" value={isShareData.evaluating_instance || ''}></simple-input>


                        <div className='text-center w-5/6 ml-10 lg:ml-[85px]'>
                            <p className='font-bold text-gray-500  text-base lg:text-xl mt-5 mb-5'>Consentimiento informado -Describir la forma en la que los participantes aceptan participar libremente en el desarrollo de la propuesta</p>
                        </div>
                        <simple-input class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" height="30px" placeholder="Escribir aquí" id="informed_consent" value={isShareData.informed_consent || ''}></simple-input>



                        <div className='text-center w-5/6 ml-10 lg:ml-[85px]'>
                            <p className='font-bold text-gray-500  text-base lg:text-xl mt-5 mb-5'>Comités éticos, bioéticas y/o debioseguridad Indicar si algún Comité ha avalado la propuesta *indispensable para investigaciones en ciencias de la salud</p>
                        </div>

                        <simple-input class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" height="30px" placeholder="Escribir aquí" id="committees" value={isShareData.committees || ''}></simple-input>

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