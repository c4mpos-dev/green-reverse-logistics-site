import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { ParticlesBackground } from "../components/ParticlesBackground";

type FAQItem = {
    question: string;
    answer: string;
};

const faqs: FAQItem[] = [
    {
        question: "Como posso agendar uma coleta?",
        answer: "O agendamento pode ser feito pelo nosso WhatsApp, que está na aba de 'Contato' nesse site.",
    },
    {
        question: "Quais cuidados devo ter antes de descartar meus eletrônicos?",
        answer: "Recomendamos apagar dados pessoais de dispositivos como celulares e computadores. Não é necessário desmontar os equipamentos. Em caso de pilhas, evite armazená-las em sacos plásticos.",
    },
    {
        question: "Quais tipos de materiais vocês coletam?",
        answer: "Coletamos eletrônicos inservíveis como computadores, impressoras, monitores, celulares, fios, cabos, placas, pilhas e etc. Também recolhemos materiais que contenham metais pesados ou que possam ser reciclados.",
    },
    {
        question: "A coleta tem algum custo?",
        answer: "Não! A coleta é gratuita, com agendamento prévio. Nossa missão é facilitar o descarte consciente.",
    },
    {
        question: "O que acontece com os materiais após a coleta?",
        answer: "Os materiais passam por triagem e são encaminhados para reciclagem, reuso ou descarte ambientalmente correto, de acordo com normas técnicas e ambientais vigentes.",
    },
    {
        question: "O que é logística reversa e por que é importante?",
        answer: "A logística reversa é o processo de recolher e dar destino adequado a produtos após o consumo, especialmente resíduos eletrônicos. Ela evita impactos ambientais e contribui para a sustentabilidade.",
    },
];

export function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full min-h-screen bg-neutral-200 flex items-center justify-center relative pt-[68px] px-2">
    <div className="hidden lg:block absolute z-0">
        <ParticlesBackground />
    </div>

    <div className="max-w-4xl w-full mx-auto px-4 py-10 bg-neutral-200 rounded-lg lg:shadow-lg lg:shadow-black/20 relative z-10">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-8">Perguntas Frequentes</h2>

        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className="rounded-2xl bg-white border border-green-600 shadow-md transition-shadow hover:shadow-black/30 hover:shadow-lg"
                >
                    <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full flex justify-between items-center px-6 py-5 text-lg font-medium text-green-900 focus:outline-none hover:cursor-pointer"
                    >
                        <span>{faq.question}</span>
                        <motion.div
                            animate={{ rotate: openIndex === index ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <FontAwesomeIcon icon={faChevronDown} className="ml-2 text-green-700" />
                        </motion.div>
                    </button>

                    <AnimatePresence>
                        {openIndex === index && (
                            <motion.div
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="px-6 py-4 text-neutral-700 text-base border-t border-green-100 bg-green-50 rounded-b-2xl"
                            >
                                {faq.answer}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
            </div>
        </div>
    </div>
    );
}
