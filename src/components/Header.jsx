// src/components/Header.jsx
import { useState } from 'react'; // PRECISAMOS DESTA LINHA
import { Link, NavLink } from 'react-router-dom';

// -- SEU CÓDIGO ORIGINAL (COM AJUSTE NO CAMINHO DO LOGO) --
const LOGO_PATH = './images/ana-carla-gomes-logo.png'; // AJUSTE: Use '/' para pasta 'public'

const Logo = () => (
    <Link to="/BLOG_REACT">
        <img
            src={LOGO_PATH}
            alt="Ana Carla Gomes Estética Avançada"
            className="h-16 md:h-20 object-contain" // Aumentei um pouco a altura no desktop
        />
    </Link>
);

export default function Header() {
    // 1. ADICIONAMOS O ESTADO PARA CONTROLAR O MENU MOBILE
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const WHATSAPP_LINK = "https://wa.me/5511994038306?text=Ol%C3%A1%2C%20vi%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20consulta.";

    const navLinks = [
        { title: 'Home', path: '/BLOG_REACT' },
        { title: 'Sobre', path: '/BLOG_REACT/sobre' },
        { title: 'Serviços', path: '/BLOG_REACT/servicos' },
        { title: 'Contato', path: '/BLOG_REACT/contato' },
    ];

    return (
        // Adicionamos 'relative' para o menu mobile se posicionar corretamente
        <header className="bg-primary-dark shadow-lg sticky top-0 z-50 relative">
            
            {/* --- SUA ESTRUTURA ORIGINAL PARA A BARRA DO HEADER --- */}
            <div className="container mx-auto px-4 flex items-center justify-between py-2">
                
                {/* Logo na Esquerda (Sem alterações) */}
                <div className="flex-shrink-0">
                    <Logo />
                </div>

                {/* Navegação no Centro (Exatamente como antes, apenas para desktop) */}
                <nav className="hidden md:flex">
                    <ul className="flex items-center gap-10">
                        {navLinks.map((link) => (
                            <li key={link.title}>
                                <NavLink
                                    to={link.path}
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

                {/* Botão CTA na Direita (Agora também some no mobile) */}
                <div className="hidden md:block flex-shrink-0"> {/* 2. ESCONDEMOS O BOTÃO NO MOBILE */}
                    <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary-orange text-white font-semibold px-6 py-2 rounded-md hover:opacity-90 transition-opacity"
                    >
                        Agende sua Consulta
                    </a>
                </div>

                {/* 3. ADICIONAMOS O BOTÃO HAMBÚRGUER (APENAS PARA MOBILE) */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Abrir menu">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                    </button>
                </div>

            </div>

            {/* 4. ADICIONAMOS O PAINEL DO MENU MOBILE QUE APARECE ABAIXO */}
            <div className={`absolute top-full left-0 w-full bg-primary-dark md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                <ul className="flex flex-col items-center gap-6 py-8">
                    {navLinks.map((link) => (
                        <li key={link.title}>
                            <NavLink
                                to={link.path}
                                onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar
                                className={({ isActive }) => `text-xl ${isActive ? 'text-primary-gold' : 'text-slate-100'}`}
                            >
                                {link.title}
                            </NavLink>
                        </li>
                    ))}
                    <li className="mt-4">
                        <a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary-orange text-white font-semibold px-8 py-3 rounded-md"
                        >
                            Agende sua Consulta
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}