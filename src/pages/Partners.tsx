import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";

import { ParticlesBackground } from "../components/ParticlesBackground";

import GRLLogo from "../assets/logo.png";

import ambipar1 from "../assets/ambipar/truck.jpg";
import ambipar2 from "../assets/ambipar/process.jpg";
import ambipar3 from "../assets/ambipar/process2.jpg";

import green1 from "../assets/green-eletron/urna.jpg";
import green2 from "../assets/green-eletron/urna-fio-cruz.jpg";
import green3 from "../assets/green-eletron/pilha.jpg";

export function Partners() {
    return (
        <div className="w-full min-h-screen pt-[68px] bg-neutral-200 text-neutral-800">
            <div className="hidden lg:block absolute inset-0 z-0">
                <ParticlesBackground />
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16 bg-neutral-200 relative z-10">
                <div className="flex flex-col items-center mb-8">
                    <img src={GRLLogo} className="h-16 sm:h-24 mb-6" />
                    <div className="bg-green-800 w-full h-0.5 mb-8"></div>
                    <div className="flex flex-col w-full">

                        <h1 className="text-4xl font-bold text-green-800">Nossos Parceiros</h1>
                        <p className="text-lg mt-2 text-neutral-600">
                            Unimos forças com gigantes da sustentabilidade para transformar o futuro.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Ambipar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col p-6 bg-neutral-100/80 rounded-2xl shadow-md shadow-black/20 hover:shadow-xl hover:shadow-black/40 border border-green-700 transition-all duration-300"
                    >
                        <h2 className="text-2xl font-bold text-green-700 mb-2">
                            <a
                                href="https://ambipar.com/?c=brazil"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline hover:text-green-800 transition-colors duration-200"
                            >
                                Ambipar
                            </a>
                        </h2>
                        <p className="mb-4">
                            A Ambipar é referência global em soluções ambientais. Com ela, garantimos que todo resíduo eletrônico seja
                            tratado de forma segura, rastreável e certificada.
                        </p>
                        <div className="w-full h-96 rounded-xl overflow-hidden">
                            <Carousel
                                showThumbs={false}
                                infiniteLoop
                                autoPlay
                                interval={3000}
                                showStatus={false}
                                className="w-full h-full"
                            >
                                {[ambipar1, ambipar2, ambipar3].map((img, i) => (
                                <div key={i} className="h-96 flex justify-center items-center bg-neutral-200">
                                    <img
                                        src={img}
                                        className="object-cover"
                                    />
                                </div>
                                ))}
                            </Carousel>
                        </div>
                    </motion.div>

                    {/* Green Eletron */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex flex-col p-6 bg-neutral-100/80 rounded-2xl shadow-md shadow-black/20 hover:shadow-xl hover:shadow-black/40 border border-green-700 transition-all duration-300"
                    >
                        <h2 className="text-2xl font-bold text-green-700 mb-2">
                            <a
                                href="https://greeneletron.org.br/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline hover:text-green-800 transition-colors duration-200"
                            >
                                Green Eletron
                            </a>
                        </h2>

                        <p className="mb-4">
                            A Green Eletron é a gestora para logística reversa de eletroeletrônicos. Com ela, fortalecemos nossa missão
                            de tornar o descarte tecnológico mais acessível, transparente e eficiente.
                        </p>
                        <div className="w-full h-96 rounded-xl overflow-hidden">
                            <Carousel
                                showThumbs={false}
                                infiniteLoop
                                autoPlay
                                interval={3000}
                                showStatus={false}
                                className="w-full h-full"
                            >
                                {[green1, green2, green3].map((img, i) => (
                                <div key={i} className="h-96 flex justify-center items-center bg-neutral-200">
                                    <img
                                        src={img}
                                        className="object-cover"
                                    />
                                </div>
                                ))}
                            </Carousel>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}