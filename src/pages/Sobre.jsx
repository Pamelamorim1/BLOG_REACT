const profileImagePath = './images/ana-carla-gomes-logo2.jpg';

export default function Sobre() {
    return (
        <div className="bg-white p-8 rounded-lg shadow-sm">
            <h1 className="text-3xl font-bold text-slate-800">Sobre</h1>
            {/* Seção única que ocupa a página inteira */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-8">

                {/* Coluna da Imagem (Esquerda em telas de computador) */}
                <div>
                    <img
                        src={profileImagePath}
                        alt="Retrato de Ana Carla Gomes"
                        className="rounded-lg shadow-xl w-full h-auto object-cover"
                    />
                </div>

                {/* Coluna do Texto (Direita em telas de computador) */}
                <div>
                    <h1 className="text-4xl font-bold text-slate-800 mb-4">
                        Uma paixão por realçar a beleza que já existe em você
                    </h1>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        Sou Ana Carla Gomes, enfermeira pós-graduada em Enfermagem Estética, apaixonada por cuidar da autoestima e bem-estar das pessoas através de tratamentos que unem ciência, segurança e beleza.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                        Minha trajetória na área da saúde me proporcionou uma base sólida de conhecimento técnico e humano. Hoje, aplico esse conhecimento na estética, oferecendo procedimentos personalizados, sempre com foco na naturalidade dos resultados e na confiança do cliente.
                    </p>
                    <br />
                    <p className="text-slate-600 leading-relaxed">
                        Acredito que a beleza vai muito além da aparência, ela é uma forma de expressar quem somos. Meu compromisso é proporcionar uma experiência acolhedora, com ética, responsabilidade e resultados que elevam a sua autoestima.
                    </p>
                    <br />
                    <p className="text-slate-600 leading-relaxed">
                        Tenho como objetivo oferecer cuidados personalizados, baseados em avaliação individualizada, com atendimento humaniza, olhar clínico com foco na naturalidade dos resultados, rigor técnico e compromisso com a biossegurança.
                    </p>
                    <br />
                    <p className="text-slate-600 leading-relaxed">
                        Estou em constante aprimoramento profissional para garantir o que há de mais eficaz e seguro aos meus clientes. Acredito que a estética vai além da aparência é uma ferramenta de autocuidado, empoderamento e qualidade de vida.
                    </p>
                </div>

            </section>

        </div >
    );
}