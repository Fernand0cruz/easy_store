import { Badge } from "@/components/ui/badge";
import { ShapesIcon } from "lucide-react";
import CategoryItens from "./components/category-item";
import { prismaClient } from "@/lib/prisma";

const CatalogPage = async () => {
    const categories = await prismaClient.category.findMany({});
    return (
        <div className="flex flex-col max-w-[1920px] m-auto">
            <Badge className="gap-1 text-base uppercase border-primary py-[0.365rem] border-2 w-fit m-5" variant={"outline"}>
                <ShapesIcon />
                Catálogo
            </Badge>
            <div className="grid grid-cols-2 gap-5 mx-5">
                {categories.map((category) => (
                    <CategoryItens key={category.id} category={category} />
                ))}
            </div>
        </div>
    );
}

export default CatalogPage;