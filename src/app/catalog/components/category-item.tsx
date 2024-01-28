import { Category } from "@prisma/client"
import Link from "next/link"

interface CategoryItensProps {
    category: Category
}
const CategoryItens = ({ category }: CategoryItensProps) => {
    return (
        <Link href={`/category/${category.slug}`}>
        <div className="flex flex-col">
            <div className="w-full h-[150px] flex justify-center items-center bg-gradient-to-r from-[#5033c3] to-[rgba(80, 51, 195, 0.20)] rounded-tl-lg rounded-tr-lg">
                <img src={category.imgUrl} alt={category.name} width={0} height={0} sizes="100vw" className="h-auto max-h-[70%] w-auto max-w-[80%]" style={{ objectFit: "contain" }} />
            </div>
            <div className="bg-accent py-3 rounded-br-lg rounded-bl-lg">
                <p className="text-center text-sm font-semibold">{category.name}</p>
            </div>
        </div>
        </Link>
    );
}

export default CategoryItens;