import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faRecycle,
    faTruck,
    faBoxOpen,
    faHandshake
} from "@fortawesome/free-solid-svg-icons"

const steps = [
    {
        icon: faBoxOpen,
        title: "Coleta",
        description:"Realizamos a coleta de materiais eletrônicos em sua empresa, casa ou em pontos de coleta estratégicos.",
    },
    {
        icon: faHandshake,
        title: "Parcerias",
        description: "Trabalhamos com empresas comprometidas com a sustentabilidade.",
    },
    {
        icon: faTruck,
        title: "Transporte",
        description:"Transportamos os materiais de forma segura e eficiente, seguindo todas as normas ambientais.",
    },
    {
        icon: faRecycle,
        title: "Reciclagem",
        description:"Os resíduos ganham novo destino de forma segura e certificada, contribuindo para a sustentabilidade.",
        className: "md:col-span-3",
    },
]

export function HowItWorks() {
    return (
        <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
                <div
                    key={index}
                    className={`flex flex-col items-center text-center space-y-4 p-6 bg-background rounded-lg shadow-sm border ${step.className}`}
                >
                    <div className="flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                        <FontAwesomeIcon
                            icon={step.icon}
                            className="p-3 h-8 w-8 text-green-600 dark:text-green-400"
                        />
                    </div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                </div>
            ))}
        </div>
    )
}
