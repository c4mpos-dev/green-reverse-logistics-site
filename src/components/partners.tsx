"use client"

import { useState } from "react";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import logoAmbipar from "@/assets/ambipar/logo.jpg";
import logoGreenEletron from "@/assets/green-eletron/logo.png";

export function Partners() {
    const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({
        ambipar: false,
        greenEletron: false,
    })

    const toggleCard = (cardId: string) => {
        setFlippedCards((prev) => ({
            ...prev,
            [cardId]: !prev[cardId],
        }))
    }

    const partners = [
        {
            id: "ambipar",
            name: "Ambipar",
            logo: logoAmbipar,
            description: "A Ambipar é líder em gestão ambiental e resposta a emergências, oferecendo soluções completas para empresas que buscam sustentabilidade. Com atuação global, a empresa se destaca por suas práticas inovadoras e compromisso com o meio ambiente.",
            website: "https://ambipar.com",
            color: "#d6ff01",
            gradient: "from-[#d6ff01]",
        },
        {
            id: "greenEletron",
            name: "Green Eletron",
            logo: logoGreenEletron,
            description: "A Green Eletron é uma gestora de logística reversa de produtos eletroeletrônicos e pilhas, criada pela ABINEE. Atua na implementação de sistemas de coleta e destinação adequada de resíduos eletrônicos, promovendo a economia circular.",
            website: "https://greeneletron.org.br/",
            color: "#8fc74a",
            gradient: "from-[#8fc74a]",
        },
    ]

    return (
        <div className="grid gap-8 md:grid-cols-2">
            {partners.map((partner) => (
                <div
                    key={partner.id}
                    className="perspective-1000 cursor-pointer h-[400px] w-full"
                    onClick={() => toggleCard(partner.id)}
                >
                    <div
                        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                            flippedCards[partner.id] ? "rotate-y-180" : ""
                        }`}
                    >
                        {/* Front of card */}
                        <Card className="absolute flex flex-col items-center justify-center p-6 w-full h-full backface-hidden ">
                            <div className="relative w-full h-32 mb-6">
                                <Image
                                    src={partner.logo}
                                    alt={`${partner.name} logo`}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-center mb-2">{partner.name}</h3>
                            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                                <FontAwesomeIcon icon={faRotateRight} className="h-4 w-4" />
                                <span>Clique para saber mais</span>
                            </div>
                            <div className={`absolute bottom-0 left-0 w-full h-1 rounded-b-lg`} style={{ backgroundColor: partner.color }}></div>
                        </Card>

                        {/* Back of card */}
                        <Card
                            className={`absolute w-full h-full backface-hidden rotate-y-180 p-6 overflow-hidden bg-gradient-to-bl flex flex-col ${partner.gradient} to-10% dark:to-card`}
                        >
                            <h3 className="text-2xl font-bold mb-4">{partner.name}</h3>
                            <p className="text-sm sm:text-base flex-grow text-muted-foreground mb-6">{partner.description}</p>
                            <div className="flex justify-between items-center">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="dark:bg-white/5 dark:border-white/40 dark:hover:bg-white/15 hover:scale-105 transition-all"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleCard(partner.id);
                                    }}
                                >
                                    Voltar
                                </Button>
                                <a
                                    href={partner.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 hover:text-black/60 dark:hover:text-white/80 hover:underline transition-colors"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    Visitar site <FontAwesomeIcon icon={faUpRightFromSquare} className="h-4 w-4" />
                                </a>
                            </div>
                            <div className={`absolute bottom-0 left-0 w-full h-1 rounded-b-lg`} style={{ backgroundColor: partner.color }}></div>
                        </Card>
                    </div>
                </div>
            ))}
        </div>
    )
}