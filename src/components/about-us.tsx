"use client"

import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export function AboutUs() {
    const [activeRegion, setActiveRegion] = useState<string | null>(null)

    const regions = [
        { id: "capital", name: "Capital", x: 60, y: 47, description: "Atendimento completo na região metropolitana do Rio de Janeiro.", },
        { id: "norte", name: "Norte Fluminense", x: 75, y: 30, description: "Coleta programada nas principais cidades da região Norte.", },
        { id: "lagos", name: "Região dos Lagos", x: 73, y: 65, description: "Coleta programada para a Região dos Lagos.", },
        { id: "centro-sul", name: "Centro-Sul Fluminense", x: 30, y: 58, description: "Atendimento para todo o Centro-Sul Fluminense." },
        { id: "serrana", name: "Região Serrana", x: 30, y: 30, description: "Coleta programada para cidades a Região Serrana." },
    ];

    const values = [
        "Compromisso com a sustentabilidade e o meio ambiente",
        "Excelência em logística reversa de eletrônicos",
        "Transparência e responsabilidade em todos os processos",
        "Inovação contínua para soluções ambientais eficazes",
    ];

    return (
        <div className="grid gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">Nossa Missão</h3>
                    <p className="text-muted-foreground">
                        A Green Reverse Logistics nasceu com o propósito de transformar a gestão de resíduos eletrônicos no estado
                        do Rio de Janeiro, oferecendo soluções sustentáveis e eficientes para empresas de todos os portes.
                    </p>
                    <p className="text-muted-foreground">
                        Nosso compromisso é reduzir o impacto ambiental do lixo eletrônico, promovendo a economia circular e
                        garantindo a destinação correta de materiais que poderiam contaminar o meio ambiente.
                    </p>
                    <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 pt-4">Valores</h3>
                    <ul className="space-y-2">
                        {values.map((value, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400" />
                                <span className="text-sm sm:text-base">{value}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="flex flex-col space-y-6">
                <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 text-center lg:text-left">
                    Atuação no Estado do Rio de Janeiro
                </h3>
                <div className="relative w-full h-[400px] bg-muted rounded-lg overflow-hidden border">
                    <div className="absolute inset-0 p-4">
                        <div className="relative w-full h-full bg-green-50 dark:bg-green-950/30 rounded-lg">
                            {/* RJ map */}
                            <svg viewBox="0 0 100 100" className="w-full h-full">
                                <path
                                    d="M10,30 Q30,10 50,20 Q70,30 90,25 L95,50 Q80,60 60,75 Q40,80 20,60 L10,30"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    className=" text-green-600/30 dark:text-green-400/30"
                                />

                                {regions.map((region) => (
                                    <g key={region.id}>
                                        <circle
                                            cx={region.x}
                                            cy={region.y}
                                            r={activeRegion === region.id ? 4 : 3}
                                            className={`cursor-pointer ${
                                                activeRegion === region.id
                                                ? "fill-green-600 dark:fill-green-400"
                                                : "fill-green-500/70 dark:fill-green-500/50 hover:fill-green-600 dark:hover:fill-green-400"
                                            }`}
                                            onClick={() => setActiveRegion(region.id === activeRegion ? null : region.id)}
                                        />
                                        <text
                                            x={region.x}
                                            y={region.y - 6}
                                            textAnchor="middle"
                                            className={`text-[4px] font-medium ${
                                                activeRegion === region.id ? "fill-green-700 dark:fill-green-300" : "fill-foreground"
                                            }`}
                                        >
                                            {region.name}
                                        </text>
                                    </g>
                                ))}
                            </svg>

                            {/* Region information */}
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                {activeRegion ? (
                                    <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg border shadow-sm">
                                        <h4 className="flex items-center gap-2 font-bold text-green-600 dark:text-green-400">
                                            <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4 -mt-1" />
                                            {regions.find((r) => r.id === activeRegion)?.name}
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            {regions.find((r) => r.id === activeRegion)?.description}
                                        </p>
                                    </div>
                                ) : (
                                    <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg border shadow-sm">
                                        <p className="text-sm text-muted-foreground">
                                            Clique nas regiões do mapa para mais informações sobre nossa atuação.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}