// src/components/Footer.jsx

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (

        <footer className="bg-slate-800 text-slate-400 mt-auto">
            <div className="container mx-auto px-4 py-4 text-center text-sm">
                <p>© {currentYear} Ana Carla Gomes . Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}