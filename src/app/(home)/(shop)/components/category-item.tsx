import { Badge } from "@/components/ui/badge"
import { CATEGORY_ICON } from "@/constants/category-icons"
import { Category } from "@prisma/client"
import Link from "next/link"

interface CategoryItemProps {
    category: Category
}
const categoryItem = ({ category }: CategoryItemProps) => {


    return (
        <Link href={`/category/${category.slug}`}>
            <Badge variant="outline" className="flex justify-center py-3 items-center gap-2 rounded-lg border hover:bg-accent">
                {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
                <span className=" text-sm">{category.name}</span>
            </Badge>
        </Link>
    )
}

export default categoryItem