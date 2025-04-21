import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faHandshake,
    faTruck,
    faRecycle,
    faLeaf
} from "@fortawesome/free-solid-svg-icons";

import CarAnimated from "../assets/car-animated.png";

export function TransportTimeline() {
    const steps = [
        {
            icon: faHouse,
            title: "Coleta",
            desc: "Buscamos eletrônicos em residências e comércios.",
        },
        {
            icon: faHandshake,
            title: "Parcerias",
            desc: "Trabalhamos com empresas comprometidas com a sustentabilidade.",
        },
        {
            icon: faTruck,
            title: "Transporte",
            desc: "Levamos com responsabilidade até pontos de reciclagem.",
        },
        {
            icon: faRecycle,
            title: "Reciclagem",
            desc: "Os resíduos ganham novo destino de forma segura e certificada.",
        },
    ];

    return (
        <div className="flex flex-col items-center w-full my-6">
            {/* Imagem + Timeline */}
            <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-10">
                <h1 className="text-2xl italic font-bold text-green-800 mb-[-10px]">-- Como funciona? --</h1>
                <img src={CarAnimated} className="opacity-90 max-w-4xl w-full lg:w-1/2 rounded-xl shadow-xl"/>

                {/* Timeline */}
                <div className="relative ml-4 border-l-4 border-green-600 pl-6 lg:w-1/2">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="mb-12 relative"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            {/* Ícone */}
                            <span className="flex justify-center items-center absolute -left-[47px] top-0 bg-green-600 text-white p-3 rounded-full shadow-lg">
                                <FontAwesomeIcon icon={step.icon} className="w-5 h-5" />
                            </span>

                            {/* Conteúdo */}
                            <div className="ml-4 p-6 bg-white rounded-lg shadow-md border-l-4 border-green-600">
                                <h3 className="font-bold text-lg text-green-700">{step.title}</h3>
                                <p className="text-gray-700 mt-1 text-sm">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Diferença entre logísticas */}
            <div className="mt-14 max-w-3xl px-4">
                <h2 className="text-center text-2xl font-bold text-green-800 mb-4 border-b border-green-700 pb-2">
                    Logística Reversa ou Verde?
                </h2>
                <p className="text-gray-700 mb-4 text-sm md:text-base">
                    <strong><FontAwesomeIcon icon={faRecycle} className="text-green-700"/> Logística Reversa:</strong> trata do retorno do produto após o consumo para reaproveitamento ou descarte adequado.
                </p>
                <p className="text-gray-700 text-sm md:text-base border-b border-green-700 pb-2">
                    <strong><FontAwesomeIcon icon={faLeaf} className="text-green-700"/> Logística Verde:</strong> cuida para que todo o processo seja feito com o menor impacto ambiental possível.
                </p>
            </div>

            <p className="text-green-700 font-semibold text-lg italic mt-5 text-center max-w-xl">
                A gente busca na sua porta. Você ajuda a transformar o planeta.
            </p>
        </div>
    );
}
