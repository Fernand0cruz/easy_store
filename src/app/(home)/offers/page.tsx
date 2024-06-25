import {
    ArrowRightFromLineIcon,
    HeadphonesIcon,
    KeyboardIcon,
    Monitor,
    MouseIcon,
    MousePointerSquare,
    SpeakerIcon
} from "lucide-react";
import PromotionalBanner from "../(shop)/components/promotional-banner";
import ProductList from "@/components/ui/product-list";
import { prismaClient } from "@/lib/prisma";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import SectionTittle from "@/components/ui/section-tittle";

// Definição das categorias com seus respectivos ícones e rótulos
const categories = [
    { slug: "mouses", icon: MouseIcon, label: "Mouses em Promoção" },
    { slug: "keyboards", icon: KeyboardIcon, label: "Teclados em Promoção" },
    { slug: "headphones", icon: HeadphonesIcon, label: "Headphones em Promoção" },
    { slug: "mousepads", icon: MousePointerSquare, label: "Mousepads em Promoção" },
    { slug: "monitors", icon: Monitor, label: "Monitores em Promoção" },
    { slug: "speakers", icon: SpeakerIcon, label: "Speakers em Promoção" },
];

export default async function Offers() {
    // Busca produtos com desconto de cada categoria
    const categoryProducts = await Promise.all(
        categories.map(category =>
            prismaClient.product.findMany({
                where: {
                    category: {
                        slug: category.slug,
                    },
                    discountPercentage: {
                        gt: 0, // Filtra produtos com desconto maior que 0
                    },
                },
            }).then(products => ({ ...category, products }))
        )
    );

    return (
        <div className="flex flex-col gap-5 max-w-screen-xl mx-auto">
            <PromotionalBanner src={"/banner_1.png"} alt="Promoção" />
            <div className="flex flex-col gap-5">
                {/* Itera sobre cada categoria e renderiza os produtos */}
                {categoryProducts.map(({ slug, icon: Icon, label, products }) => (
                    products.length > 0 && (
                        <Card key={slug} className="flex flex-col py-5 px-2">
                            <div className="flex justify-between">
                                <div className="flex gap-2">
                                    <Icon />
                                    <SectionTittle>
                                        {label}
                                    </SectionTittle>
                                </div>
                                <Link href={`/category/${slug}`} className="hidden sm:flex">
                                    <p className="uppercase flex gap-2">ver mais<ArrowRightFromLineIcon /></p>
                                </Link>
                            </div>
                            <ProductList products={products} />
                        </Card>
                    )
                ))}

            </div>
        </div>
    );
}

