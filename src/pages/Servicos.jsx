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
        title: "Limpeza de Pele",
        description: "Renove sua pele, removendo impurezas e cravos de forma profunda.",
    },
    {
        icon: <FacialIcon />,
        title: "Microagulhamento com Ativos",
        description: "Reduza rugas e linhas de expressão, rejuvenescendo sua aparência.",
    },

    {
        icon: <FacialIcon />,
        title: "Peeling",
        description: "Tratamento para manchas, acne e envelhecimento cutâneo.",
    },
];


const serviceInjetaveis = [
    {
        icon: <FacialIcon />,
        title: "Toxina Botulínica (Botox)",
        description: "Descrever",
    },
    {
        icon: <FacialIcon />,
        title: "Preenchimento Labial",
        description: "Conquiste lábios mais volumosos e definidos com naturalidade.",
    },
    {
        icon: <FacialIcon />,
        title: "Bioestimulador de Colágeno",
        description: "Descrever",
    },
    {
        icon: <FacialIcon />,
        title: "PEIM (Tratamento de Vasos)",
        description: "Descrever",
    },
    {
        icon: <FacialIcon />,
        title: "Enzimas Redutoras de Medidas",
        description: "Descrever",
    },
];

const serviceIntimus = [
    {
        icon: <FacialIcon />,
        title: "Harmonização de Glúteo",
        description: "Descrever",
    },
    {
        icon: <FacialIcon />,
        title: "Harmonização Íntima",
        description: "Descrever",
    },
    {
        icon: <FacialIcon />,
        title: "Drenagem Linfática",
        description: "Descrever",
    },
    {
        icon: <FacialIcon />,
        title: "Massagem Modeladora",
        description: "Descrever",
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
            <h4 className="text-2xl font-bold text-slate-700">Procedimentos Faciais</h4>
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
            <br />
            <br />
            <h4 className="text-2xl font-bold text-slate-700">Injetáveis e Preenchedores</h4>
            <div className="flex overflow-x-auto space-x-8 py-4 snap-x snap-mandatory">
                {serviceInjetaveis.map((service, index) => (
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
            <br />
            <br />
            <h4 className="text-2xl font-bold text-slate-700">Procedimentos Corporais e Íntimos</h4>
            <div className="flex overflow-x-auto space-x-8 py-4 snap-x snap-mandatory">
                {serviceIntimus.map((service, index) => (
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