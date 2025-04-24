import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRecycle, faTruck, faHandsHelping } from "@fortawesome/free-solid-svg-icons";

import { ParticlesBackground } from "../components/ParticlesBackground";

import GRLLogo from "../assets/logo.png";

export function About() {
    return (
        <div className="relative w-full pt-[68px] bg-neutral-200">
            <div className="hidden lg:block absolute inset-0 z-0">
                <ParticlesBackground />
            </div>

            <div className="max-w-5xl mx-auto px-6 py-16 bg-neutral-200 relative z-10">
                <div className="flex flex-col items-center">
                    <img src={GRLLogo} className="h-16 sm:h-24 mb-6" />
                    <div className="bg-green-800 w-full h-0.5 mb-8"></div>
                    <div className="flex flex-col w-full">
                        <h1 className="text-4xl font-bold text-green-800 mb-4">Quem Somos?</h1>
                        <p className="text-lg max-w-3xl mb-8">
                            A <strong>Green Reverse Logistics</strong> é uma empresa especializada na coleta e destinação correta de resíduos eletrônicos. Atuamos com foco em logística reversa e práticas sustentáveis em todo o estado do Rio de Janeiro.
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 mt-4">
                    <div className="grid gap-6 lg:grid-cols-1">
                        <div className="bg-white border border-green-700 rounded-2xl p-6 shadow-md shadow-black/40 hover:shadow-lg hover:scale-105 transition-all duration-300">
                            <h2 className="text-xl font-semibold text-green-700 flex items-center gap-3 mb-2">
                                <FontAwesomeIcon icon={faRecycle} className="text-green-700 text-xl" />
                                Compromisso com o meio ambiente
                            </h2>
                            <p className="text-gray-700">
                                Nosso propósito é dar um destino ecologicamente correto a equipamentos que seriam
                                descartados incorretamente, evitando danos à natureza e promovendo a economia circular.
                            </p>
                        </div>

                        <div className="bg-white border border-green-700 rounded-2xl p-6 shadow-md shadow-black/40 hover:shadow-lg hover:scale-105 transition-all duration-300">
                            <h2 className="text-xl font-semibold text-green-700 flex items-center gap-3 mb-2">
                                <FontAwesomeIcon icon={faTruck} className="text-green-700 text-xl" />
                                Coleta em todo o estado
                            </h2>
                            <p className="text-gray-700">
                                Se você mora no estado do Rio de Janeiro e deseja fazer um descarte consciente, basta entrar em contato conosco solicitando a coleta,
                                iremos verificar a viabilidade e responderemos o mais rápido possível.
                            </p>
                        </div>

                        <div className="bg-white border border-green-700 rounded-2xl p-6 shadow-md shadow-black/40 hover:shadow-lg hover:scale-105 transition-all duration-300">
                            <h2 className="text-xl font-semibold text-green-700 flex items-center gap-3 mb-2">
                                <FontAwesomeIcon icon={faHandsHelping} className="text-green-700 text-xl" />
                                Parceiros de responsabilidade
                            </h2>
                            <p className="text-gray-700">
                                Após a coleta, o produto é armazenado e levado em segurança até nossos parceiros, onde garantem uma reciclagem segura e correta, 
                                seguindo todas as normas ambientais.
                            </p>
                        </div>
                    </div>


                    <div className="w-full h-full flex justify-center items-center">
                        <div className="relative w-full h-96 lg:h-[600px] rounded-2xl overflow-hidden border-4 border-green-700 shadow-lg">
                            <iframe
                                title="Mapa RJ"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1893260.3658679703!2d-44.242924285986575!3d-22.058233241096257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x981894cae28ac3%3A0x349c31ac10583d0!2sRio%20de%20Janeiro!5e0!3m2!1spt-BR!2sbr!4v1745509529743!5m2!1spt-BR!2sbr"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full rounded-xl shadow-md border border-green-700"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
