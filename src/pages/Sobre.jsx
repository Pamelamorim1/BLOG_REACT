const profileImagePath = './images/ana-carla-gomes-logo.png';

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
                        Olá, sou Ana Carla Gomes, especialista em estética avançada. Minha jornada começou com o desejo de unir ciência e arte para oferecer tratamentos que não apenas transformam a pele, mas também elevam a autoestima e o bem-estar.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                        Acredito que cada pessoa possui uma beleza única. Meu trabalho é utilizar as técnicas mais modernas e seguras para realçar essa individualidade, sempre com resultados naturais e elegantes, respeitando os seus desejos e a sua saúde.
                    </p>
                </div>

            </section>

        </div >
    );
}