import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowPointer } from "@fortawesome/free-solid-svg-icons";

export function PollutionCard() {
    return (
        <div className="group relative h-96 w-72 [perspective:1000px]">
            <div className="absolute duration-1000 w-full h-full [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
                {/* Frente do Card */}
                <div className="absolute w-full h-full rounded-xl bg-gradient-to-br from-green-800 to-green-500 p-6 text-white [backface-visibility:hidden] shadow-lg shadow-black/50">
                    <div className="flex flex-col h-full">
                        <div className="flex justify-between items-start">
                            <div className="text-2xl font-bold leading-tight">Lixo Eletrônico</div>
                            <div className="text-5xl">♻️</div>
                        </div>
                        <div className="mt-4">
                            <p className="text-lg">Todos os anos, o mundo gera uma enorme quantidade de lixo eletrônico...</p>
                        </div>
                        <div className="flex items-center gap-2 mt-auto">
                            <FontAwesomeIcon icon={faArrowPointer} className="text-sm"/>
                            <p className="text-sm opacity-80">Saiba mais!</p>
                        </div>
                    </div>
                </div>
        
                {/* Verso do Card */}
                <div className="absolute w-full h-full rounded-xl bg-gradient-to-br from-green-800 to-amber-600 p-6 text-white [transform:rotateX(180deg)] [backface-visibility:hidden] shadow-lg shadow-black/50">
                    <div className="flex flex-col h-full">
                        <div className="text-xl font-bold mb-2">Impacto Global</div>
                        <div className="flex-grow">
                            <p className="text-lg">
                                Em média, são produzidas <span className="font-bold">62 milhões de toneladas</span> de lixo eletrônico por ano no mundo.
                            </p>
                            <p className="mt-3 text-sm text-amber-100">
                                A maior parte não é reciclada corretamente, o que ameaça o meio ambiente e a saúde pública.
                            </p>
                        </div>
                        <div className="flex justify-between items-center mt-auto">
                            <button
                                className="px-4 py-2 bg-white text-green-700 rounded-lg font-semibold hover:bg-opacity-90 transition-colors hover:cursor-pointer"
                                onClick={() =>
                                    window.open(
                                        "https://greeneletron.org.br/blog/lixo-eletronico-mundo-bate-recorde-historico-de-geracao-de-residuo/",
                                        "_blank"
                                    )
                                }
                                >
                                Saiba mais
                            </button>
                            <span className="text-3xl">🌍</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}  