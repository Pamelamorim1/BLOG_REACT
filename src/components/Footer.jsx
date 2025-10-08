// src/components/Footer.jsx

// 1. Importe as imagens como se fossem módulos
import instagramIcon from '../assets/images/instagram.png';
import emailIcon from '../assets/images/email.png';
import whatsappIcon from '../assets/images/whatsapp.png';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = {
        instagram: "https://www.instagram.com/dra.anacarlag?igsh=MW1xZzdudjdvMWRocg%3D%3D&utm_source=qr",
        email: "mailto:clinicalove.esthetic@gmail.com?subject=Seu Assunto&body=Corpo do email",
        whatsapp: "https://wa.me/5511994038306",
    };

    return (
        <footer className="mt-auto">
            {/* --- SEÇÃO DE REDES SOCIAIS COM IMAGENS --- */}
            <div className="bg-slate-200">
                <div className="container mx-auto px-4 py-4 text-center">
                    <h3 className="font-semibold text-slate-800 mb-4">Siga-nos nas redes</h3>
                    <div className="flex justify-center items-center gap-6">
                        
                        {/* Link do Instagram com <img> */}
                        <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <img 
                                src={instagramIcon} 
                                alt="Ícone do Instagram" 
                                className="h-8 w-8 hover:scale-110 transition-transform" 
                            />
                        </a>
                        
                        {/* Link do Facebook com <img> */}
                        <a href={socialLinks.email} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <img 
                                src={emailIcon} 
                                alt="Ícone do Email" 
                                className="h-8 w-8 hover:scale-110 transition-transform" 
                            />
                        </a>
                        
                        {/* Link do WhatsApp com <img> */}
                        <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                            <img 
                                src={whatsappIcon} 
                                alt="Ícone do WhatsApp" 
                                className="h-8 w-8 hover:scale-110 transition-transform" 
                            />
                        </a>
                    </div>
                </div>
            </div>

            {/* --- SEÇÃO DE COPYRIGHT --- */}
            <div className="bg-slate-800 text-slate-400">
                <div className="container mx-auto px-4 py-4 text-center text-sm">
                    <p>© {currentYear} Ana Carla Gomes. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

// 2. Apague os componentes de ícone SVG que estavam aqui