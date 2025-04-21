import { Typewriter } from "react-simple-typewriter";

import { ParticlesBackground } from "../components/ParticlesBackground";
import { PollutionCard } from "../components/PollutionCard";
import { TransportTimeline } from "../components/TransportTimeLine";

export function Home() {
    return (
        <div className="flex flex-col items-center justify-center w-full bg-neutral-200">
            <div className="relative w-full h-screen overflow-hidden bg-neutral-200 border-b border-green-700 z-10">
                <div className="absolute z-0">
                    <ParticlesBackground />
                </div>

                <div className="flex flex-col md:flex-row justify-center lg:justify-between items-center w-full h-full gap-10 md:gap-10 pt-[68px] px-4 md:px-8 lg:px-16 xl:px-36 2xl:px-[220px] relative z-10">
                    {/* Text section */}
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

                    {/* Chart section */}   
                    <PollutionCard />
                </div>
            </div>

            {/* Transport Timeline */}
            <div className=" flex items-center justify-center bg-neutral-200 z-10 px-6 border-b border-green-700">
                <TransportTimeline />
            </div>
        </div>
    );
}
