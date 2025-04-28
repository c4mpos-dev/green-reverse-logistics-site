import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
    {
        question: "O que é logística reversa?",
        answer: "Logística reversa é o processo de planejamento, implementação e controle do fluxo de matérias-primas, estoque em processo e produtos acabados do ponto de consumo até o ponto de origem, com o objetivo de recapturar valor ou realizar um descarte adequado.",
        value: "item-1"
    },
    {
        question: "Quais tipos de resíduos eletrônicos vocês coletam?",
        answer: "Coletamos uma ampla variedade de resíduos eletrônicos, incluindo computadores, notebooks, tablets, smartphones, impressoras, televisores, equipamentos de áudio, eletrodomésticos de pequeno porte, baterias, pilhas e outros dispositivos eletrônicos.",
        value: "item-2"
    },
    {
        question: "Quais cuidados devo ter antes de descartar meus eletrônicos?",
        answer: "Recomendamos apagar dados pessoais de dispositivos como celulares e computadores. Não é necessário desmontar os equipamentos. Em caso de pilhas, evite armazená-las em sacos plásticos.",
        value: "item-3"
    },
    {
        question: "A coleta tem algum custo?",
        answer: "Não. A coleta é gratuita, com agendamento prévio. Nossa missão é facilitar o descarte consciente.",
        value: "item-4"
    },
    {
        question: "O que acontece com os materiais após a coleta?",
        answer: "Os materiais passam por triagem e são encaminhados para reciclagem, reuso ou descarte ambientalmente correto, de acordo com normas técnicas e ambientais vigentes.",
        value: "item-5"
    },
    {
        question: "Como posso agendar uma coleta?",
        answer: "O agendamento pode ser feito pelo nosso WhatsApp, que está na aba de 'Contato' nesse site.",
        value: "item-6"
    }
];

export function FaqSection() {
    return (
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            {faqItems.map((item) => (
                <AccordionItem key={item.value} value={item.value}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}
