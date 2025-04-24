import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import { ParticlesBackground } from "../components/ParticlesBackground";

export function Contact() {
    return (
        <div className="min-h-screen pt-[68px] bg-neutral-200 flex flex-col items-center justify-center sm:px-6">
            <div className="hidden sm:block absolute z-0">
                <ParticlesBackground />
            </div>

            <div className="max-w-3xl w-full text-center px-6 py-6 z-10 bg-neutral-200 rounded-lg sm:shadow-lg sm:shadow-black/20">
                <h1 className="text-[2rem] sm:text-4xl md:text-5xl font-bold text-green-800 mb-6">Entre em contato conosco!</h1>
                <p className="text-lg text-green-900 mb-10">
                    Tem alguma dúvida, sugestão ou quer saber como podemos ajudar com a logística reversa dos seus eletrônicos?
                    Entre em contato com a gente agora mesmo!
                </p>

                <div className="bg-neutral-100/80 p-8 rounded-2xl shadow-xl shadow-black/20 border border-green-700">
                    <h2 className="text-2xl font-semibold text-green-800 mb-4">Nosso atendimento é rápido e direto!</h2>
                    <p className="text-green-900 mb-6">
                        Clique no botão abaixo para iniciar uma conversa via WhatsApp. Será um prazer te atender!
                    </p>
                    <a
                        href="https://wa.me/5524999227558"
                        target="_blank"
                        className="inline-flex items-center px-6 py-3 gap-3 bg-green-600 text-sm sm:text-lg text-white font-semibold rounded-full transition-all shadow-lg shadow-black/40 hover:bg-green-700 hover:scale-105"
                    >
                        <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
                        Falar no WhatsApp
                    </a>
                </div>

                <div className="mt-12 text-sm text-gray-500">
                    Ou, se preferir, envie um e-mail para <span className="font-medium text-green-800">xxxxxxx@xxxx.com.br</span>
                </div>
            </div>
        </div>
    );
}
