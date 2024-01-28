import { Badge } from "@/components/ui/badge"
import { CATEGORY_ICON } from "@/constants/category-icons"
import { Category } from "@prisma/client"

interface CategoryItemProps {
    category: Category
}
const categoryItem = ({ category }: CategoryItemProps) => {
   

    return (
        <Badge variant="outline" className="flex justify-center py-3 items-center gap-2 rounded-lg">
            {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
            <span className="">{category.name}</span>
        </Badge>
    )
}

export default categoryItem