import { ShapesIcon } from "lucide-react";
import CategoryItens from "./components/category-item";
import { prismaClient } from "@/lib/prisma";
import SectionTittle from "@/components/ui/section-tittle";

const CatalogPage = async () => {
    // Busca todas as categorias
    const categories = await prismaClient.category.findMany({});

    return (
        <div className="flex flex-col mt-5 max-w-screen-xl mx-auto">
            <div className="flex gap-2">
                <ShapesIcon />
                <SectionTittle>
                    Catálogo
                </SectionTittle>
            </div>
            <div className="grid grid-cols-2 gap-2">

                {categories.map((category) => (
                    <CategoryItens key={category.id} category={category} />
                ))}

            </div>
        </div>
    );
}
export default CatalogPage;