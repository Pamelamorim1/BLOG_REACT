// src/pages/Contato.jsx

export default function Contato() {
    // Cole o link SRC que você copiou do Google Maps aqui
    const googleMapsSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.791859717222!2d-46.58102602548852!3d-23.5399874608057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5f07333b7f77%3A0x86ed2e3cdcba8537!2sCondom%C3%ADnio%20You%20Metropolitan!5e0!3m2!1spt-BR!2sbr!4v1759806480837!5m2!1spt-BR!2sbr"; // SUBSTITUA PELO SEU LINK REAL

    return (
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
            <h1 className="text-3xl font-bold text-slate-800 mb-6">Entre em Contato</h1>

            {/* Container flexível para o layout responsivo */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Coluna de Informações */}
                <div className="space-y-4">
                    <div>
                        <h2 className="text-xl font-semibold text-slate-700">Endereço</h2>
                        <p className="text-slate-600">Rua Catiguá, 159 - Tatuapé, São Paulo - SP, Cep: 03065-030</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-slate-700">Telefone</h2>
                        <p className="text-slate-600">(11) 99403-8306</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-slate-700">Email</h2>
                        <p className="text-slate-600">clinicalove.esthetic@gmail.com</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-slate-700">Instagram</h2>
                        <p className="text-slate-600">@dra.anacarlg</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-slate-700">Horário de Funcionamento (Atendimento com horário agendado)</h2>
                        <p className="text-slate-600">Segunda a Sexta: 19:30 às 21:00</p>
                        <p className="text-slate-600">Sábado e Domingo: 9:00 às 19:00</p>
                    </div>
                </div>

                {/* Coluna do Mapa */}
                <div className="w-full">
                    <div className="overflow-hidden rounded-lg shadow-md">
                        <iframe
                            src={googleMapsSrc}
                            className="w-full h-96" // Tailwind classes para largura e altura
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

            </div>
        </div>
    );
}