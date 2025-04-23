import { Typewriter } from "react-simple-typewriter";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faRecycle,
    faLeaf,
} from "@fortawesome/free-solid-svg-icons";

import { ParticlesBackground } from "../components/ParticlesBackground";
import { PollutionCard } from "../components/PollutionCard";
import { TransportTimeline } from "../components/TransportTimeLine";

import CarGoToRecycle from "../assets/go-to-recycle.png";

export function Home() {

    return (
        <div className="flex flex-col items-center justify-center w-full bg-neutral-200">
            {/* Inicio */}
            <div className="relative w-full h-screen overflow-hidden bg-neutral-200 border-b border-green-700 z-10">
                <div className="absolute z-0">
                    <ParticlesBackground />
                </div>

                <div className="flex flex-col md:flex-row justify-center lg:justify-between items-center w-full h-full gap-10 md:gap-10 pt-[68px] px-4 md:px-8 lg:px-16 xl:px-36 2xl:px-[220px] relative z-10">
                    <div className="flex flex-col items-center text-center mt-6 md:mt-0 md:text-left md:items-start">
                        <h1 className="text-3xl uppercase mb-8 md:mb-10 font-bold md:text-[27px] lg:text-[40px] xl:text-5xl 2xl:text-[52px]">
                            Green Reverse Logistics
                        </h1>

                        <h2 className="text-[22px] md:text-3xl lg:text-[33px] 2xl:text-4xl">
                            Salvando{" "}
                            <span className="text-green-700 font-bold">
                            <Typewriter
                                words={[
                                    "vidas",
                                    "o planeta",
                                    "o meio ambiente",
                                    "o futuro",
                                    "a natureza",
                                    "nossos oceanos",
                                    "nossas florestas",
                                    "o amanhã",
                                    "a biodiversidade",
                                    "a esperança",
                                ]}
                                loop={0}
                                cursor
                                cursorStyle="|"
                                typeSpeed={80}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                            </span>
                        </h2>

                        <p className="mt-4 text-md md:text-lg italic text-gray-600 2xl:text-xl">
                            Retornando valor ao meio ambiente.
                        </p>
                    </div>

                    <PollutionCard />
                </div>
            </div>

            {/* Como Funciona */}
            <div id="como-funciona" className=" flex flex-col items-center justify-center w-full bg-neutral-200 z-10 py-8 px-8 lg:px-20 xl:px-36 border-b border-green-700">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-green-800 text-center italic mb-12">
                    Como funciona?
                </h1>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mx-auto">
                    <img src={CarGoToRecycle} className="w-full max-w-md rounded-xl shadow-xl opacity-90"/>

                    {/* Comparativo logístico */}
                    <div className="flex flex-col gap-6 max-w-xl">
                        <h2 className="text-2xl font-bold text-green-800 border-b border-green-700 pb-2 text-center lg:text-left">
                            Logística Reversa ou Verde?
                        </h2>
                        <p className="text-gray-700 text-base">
                            <strong>
                                <FontAwesomeIcon icon={faRecycle} className="text-green-700" /> Logística Reversa:
                            </strong>{" "}
                            retorno do produto após o consumo para reaproveitamento ou descarte adequado.
                        </p>
                        <p className="text-gray-700 text-base">
                            <strong>
                                <FontAwesomeIcon icon={faLeaf} className="text-green-700" /> Logística Verde:
                            </strong>{" "}
                            todo o processo com o menor impacto ambiental possível.
                        </p>
                    </div>
                </div>
                <TransportTimeline />
            </div>
        </div>
    );
}