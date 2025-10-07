// src/components/ServiceCard.jsx

// O ícone pode ser um componente SVG ou uma imagem.
// Para este exemplo, passaremos o ícone como um componente React (JSX).
export default function ServiceCard({ icon, title, description }) {
    return (
        // O card em si. Note que ele não tem largura definida aqui,
        // a largura será controlada pelo container do carrossel.
        <div className="bg-slate-100 rounded-lg p-8 h-full flex flex-col items-center text-center shadow-sm">
            {/* Círculo do Ícone */}
            <div className="w-24 h-24 mb-6 flex items-center justify-center rounded-full border-2 border-primary-orange">
                <div className="text-primary-orange">
                    {icon}
                </div>
            </div>

            {/* Título do Serviço */}
            <h3 className="text-xl font-semibold text-slate-800 mb-2">{title}</h3>

            {/* Descrição */}
            <p className="text-slate-500 mb-6 flex-grow">{description}</p>

            {/* Botão */}
            <a
                href="#"
                className="mt-auto bg-primary-orange text-white font-semibold px-8 py-2 rounded-md hover:opacity-90 transition-opacity"
            >
                Saiba mais
            </a>
        </div>
    );
}