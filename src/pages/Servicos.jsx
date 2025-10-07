// src/pages/Servicos.jsx
import ServiceCard from '../components/ServiceCard';

// Ícone de exemplo
const FacialIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2.25 2.25 0 00-2.25-2.25-2.25 2.25 0 00-2.25 2.25-2.25 2.25 0 002.25 2.25-2.25 2.25 0 002.25-2.25zM4.572 15.428a2.25 2.25 0 00-2.25-2.25-2.25 2.25 0 00-2.25 2.25-2.25 2.25 0 002.25 2.25-2.25 2.25 0 002.25-2.25zM12 12a5.25 5.25 0 00-5.25 5.25H17.25A5.25 5.25 0 0012 12z" />
    </svg>
);

// Dados dos serviços para o carrossel
const servicesData = [
    {
        icon: <FacialIcon />,
        title: "Harmonização Facial",
        description: "Realce sua beleza natural com procedimentos seguros e resultados incríveis.",
    },
    {
        icon: <FacialIcon />,
        title: "Aplicação de Botox",
        description: "Reduza rugas e linhas de expressão, rejuvenescendo sua aparência.",
    },
    {
        icon: <FacialIcon />,
        title: "Preenchimento Labial",
        description: "Conquiste lábios mais volumosos e definidos com naturalidade.",
    },
    {
        icon: <FacialIcon />,
        title: "Limpeza de Pele",
        description: "Renove sua pele, removendo impurezas e cravos de forma profunda.",
    },
    {
        icon: <FacialIcon />,
        title: "Peeling Químico",
        description: "Tratamento para manchas, acne e envelhecimento cutâneo.",
    },
];


export default function Servicos() {
    return (
        <div className="w-full">
            <div className="text-center mb-2">
                <h1 className="text-4xl font-bold text-slate-800">Nossos Serviços</h1>
                <p className="text-slate-600 mt-2">Conheça os tratamentos que oferecemos para cuidar de você.</p>
            </div>

            {/* --- Container do Carrossel --- */}
            <div className="flex overflow-x-auto space-x-8 py-4 snap-x snap-mandatory">
                {servicesData.map((service, index) => (
                    // --- Wrapper de cada Slide ---
                    <div key={index} className="snap-center flex-shrink-0 w-10/12 sm:w-1/2 md:w-1/3 lg:w-1/4">
                        <ServiceCard
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}