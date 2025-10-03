// src/components/Sidebar.jsx

export default function Sidebar() {
    const categories = ['Tecnologia', 'Design', 'Negócios'];

    return (
        <aside className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-slate-800 mb-4 border-b pb-2">
                Categorias
            </h3>
            <ul className="space-y-2 list-disc list-inside">
                {categories.map((category) => (
                    <li key={category} className="text-slate-600 hover:text-slate-900">
                        <a href="#">{category}</a>
                    </li>
                ))}
            </ul>
        </aside>
    );
}