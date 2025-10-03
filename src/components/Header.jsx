// src/components/Header.jsx
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    const navLinks = [
        { title: 'Início', path: '/' },
        { title: 'Categorias', path: '/categorias' },
        { title: 'Sobre', path: '/sobre' },
        { title: 'Contato', path: '/contato' },
    ];

    return (
        <header className="bg-slate-800 text-white shadow-md">
            <div className="container mx-auto px-4 py-6 text-center">
                {/* O Link aqui faz o título ser clicável para voltar para a Home */}
                <Link to="/">
                    <h1 className="text-4xl font-bold">Blog</h1>
                    <p className="text-slate-300 mt-1">Artigos e notícias do momento</p>
                </Link>
                <nav className="mt-4">
                    <ul className="flex justify-center gap-4 sm:gap-6">
                        {navLinks.map((link) => (
                            <li key={link.title}>
                                {/* Usamos NavLink para poder estilizar o link ativo */}
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `transition-colors hover:text-cyan-400 ${isActive ? 'text-cyan-400 font-semibold' : 'text-slate-100'}`
                                    }
                                >
                                    {link.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}