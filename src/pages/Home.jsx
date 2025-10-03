import ArticleCard from '../components/ArticleCard';
import Sidebar from '../components/Sidebar';

export default function Home() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Coluna dos Artigos */}
            <div className="md:col-span-2 flex flex-col gap-8">
                <ArticleCard title="Artigo 1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel purus
                    ut nunc blandit cursus.
                </ArticleCard>
                <ArticleCard title="Artigo 2">
                    Curabitur at libero nec nisi consectetur bibendum. Nulla facilisi. Sed sit
                    amet velit vitae libero.
                </ArticleCard>
            </div>
            {/* Coluna da Sidebar */}
            <div className="md:col-span-1">
                <Sidebar />
            </div>
        </div>
    );
}