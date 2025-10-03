// src/components/ArticleCard.jsx

// Usamos `title` e `children` como props para tornar o card reutilizável
export default function ArticleCard({ title, children }) {
    return (
        <article className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-serif text-slate-800 mb-2">{title}</h2>
            <p className="text-slate-600 font-serif leading-relaxed">
                {children}
            </p>
        </article>
    );
}