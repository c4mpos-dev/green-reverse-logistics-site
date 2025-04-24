import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faHandshake,
    faTruck,
    faRecycle,
} from "@fortawesome/free-solid-svg-icons";

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
        <div className="mt-10 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-stretch gap-6">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        className="flex-1 bg-white p-6 text-center border-green-700 border-t-4 rounded-lg shadow-md shadow-black/40 hover:shadow-xl hover:scale-105 transition-all duration-300"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex justify-center mb-4">
                            <div className="bg-green-700 text-white p-3 rounded-full shadow-lg">
                                <FontAwesomeIcon icon={step.icon} className="w-5 h-5" />
                            </div>
                        </div>
                        <h3 className="font-bold text-green-700 text-lg mb-1">{step.title}</h3>
                        <p className="text-gray-700 text-sm">{step.desc}</p>
                    </motion.div>
                ))}
            </div>

            <p className="text-green-700 font-semibold text-lg italic mt-6 text-center">
                A gente busca na sua porta. Você ajuda a transformar o planeta.
            </p>
        </div>
    );
}
