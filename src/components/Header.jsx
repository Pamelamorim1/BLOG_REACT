// src/components/Header.jsx
import { Link, NavLink } from 'react-router-dom';

const LOGO_PATH = './images/ana-carla-gomes-logo.png';

const Logo = () => (
    <Link to="/" className="flex items-center space-x-2"> {/* Use flex para alinhar o logo e texto se quiser */}
        <img
            src={LOGO_PATH}
            alt="Ana Carla Gomes Estética Avançada"
            className="h-16 md:h-16 object-contain" // Ajuste o tamanho conforme necessário
        />
        {/* Você pode manter o texto descritivo abaixo da imagem ou removê-lo */}
        {/* <span className="sr-only">Ana Carla Gomes Estética Avançada</span> */}
        {/* Ou, se o logo não tiver o texto, você pode manter um texto estilizado ao lado: */}
        {/* <div>
        <span className="block text-lg font-serif text-primary-gold">Ana Carla Gomes</span>
        <span className="block text-xs font-sans tracking-widest text-slate-300">ESTÉTICA AVANÇADA</span>
    </div> */}
    </Link>
);

export default function Header() {
    const WHATSAPP_LINK = "https://wa.me/5511994038306?text=Ol%C3%A1%2C%20vi%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20consulta.";

    // Atualizamos os links para corresponder à nova imagem
    const navLinks = [
        { title: 'Home', path: '/BLOG_REACT' },
        { title: 'Sobre', path: '/BLOG_REACT/sobre' },
        { title: 'Serviços', path: '/BLOG_REACT/servicos' },
        { title: 'Contato', path: '/BLOG_REACT/contato' },
    ];

    return (
        // Fundo escuro e sombra sutil
        <header className="bg-primary-dark shadow-lg sticky top-0 z-50">
            {/* Container principal com Flexbox */}
            <div className="container mx-auto px-4 flex items-center justify-between py-2">
                {/* Logo na Esquerda */}
                <div className="flex-shrink-0">
                    <Logo />
                </div>

                {/* Navegação no Centro (escondida em telas pequenas) */}
                <nav className="hidden md:flex">
                    <ul className="flex items-center gap-10">
                        {navLinks.map((link) => (
                            <li key={link.title}>
                                <NavLink
                                    to={link.path}
                                    // Estiliza o link ativo com uma borda inferior
                                    className={({ isActive }) =>
                                        `text-slate-100 hover:text-primary-gold transition-colors pb-1 ${isActive ? 'border-b-2 border-primary-gold' : 'border-b-2 border-transparent'}`
                                    }
                                >
                                    {link.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Botão CTA na Direita */}
                <div>
                    <a
                        href={WHATSAPP_LINK}
                        target="_blank" // Abre o WhatsApp em uma nova aba
                        rel="noopener noreferrer" // Medida de segurança para links externos
                        className="bg-primary-orange text-white font-semibold px-6 py-2 rounded-md hover:opacity-90 transition-opacity"
                    >
                        Agende sua Consulta
                    </a>
                </div>
            </div>
        </header>
    );
}