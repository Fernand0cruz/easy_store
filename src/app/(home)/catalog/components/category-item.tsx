import { Category } from "@prisma/client"
import Link from "next/link"
import Image from "next/image"

interface CategoryItensProps {
    category: Category
}

const CategoryItens = ({ category }: CategoryItensProps) => {
    return (
        <Link href={`/category/${category.slug}`}>
        <div className="flex flex-col">
            <div className="w-full h-[150px] flex justify-center items-center rounded-tl-lg rounded-tr-lg bg-category-item-gradient">
                <Image 
                    src={category.imgUrl} 
                    alt={category.name} 
                    width={100} 
                    height={100}  
                    className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain" 
                    quality={100}
                />
            </div>
            <div className="bg-accent py-5 rounded-br-lg rounded-bl-lg">
                <p className="text-center text-sm font-semibold">{category.name}</p>
            </div>
        </div>
        </Link>
    );
}
export default CategoryItens;