import { Badge } from "@/components/ui/badge";
import { HeadphonesIcon, KeyboardIcon, Monitor, MouseIcon, MousePointerSquare, SpeakerIcon, StarIcon } from "lucide-react";
import PromotionalBanner from "../(shop)/components/promotional-banner";
import ProductList from "@/components/ui/product-list";
import { prismaClient } from "@/lib/prisma";

export default async function Offers() {
    const mouses = await prismaClient.product.findMany({
        where: {
            category: {
                slug: "mouses",
            },
            discountPercentage: {
                gt: 0,
            },
        },
    });
    const keyboards = await prismaClient.product.findMany({
        where: {
            category: {
                slug: "keyboards",
            },
            discountPercentage: {
                gt: 0,
            },
        },
    });
    const headphones = await prismaClient.product.findMany({
        where: {
            category: {
                slug: "headphones",
            },
            discountPercentage: {
                gt: 0,
            },
        },
    });
    const mousepads = await prismaClient.product.findMany({
        where: {
            category: {
                slug: "mousepads",
            },
            discountPercentage: {
                gt: 0,
            },
        },
    });
    const monitors = await prismaClient.product.findMany({
        where: {
            category: {
                slug: "monitors",
            },
            discountPercentage: {
                gt: 0,
            },
        },
    });
    const speakers = await prismaClient.product.findMany({
        where: {
            category: {
                slug: "speakers",
            },
            discountPercentage: {
                gt: 0,
            },
        },
    });
    return (
        <div className="flex flex-col gap-8 mb-8">
            <div className="m-5">
                <PromotionalBanner src={"/banner_1.png"} alt="" />
            </div>
            {
                mouses.length > 0 && (
                    <div className="flex flex-col gap-5">
                        <Badge className="gap-1 text-base uppercase border-primary py-[0.365rem] border-2 w-fit mx-5" variant={"outline"}>
                            <MouseIcon />
                            Mouses em Promoção
                        </Badge>
                        <ProductList products={mouses} />
                    </div>
                )
            }
            {
                keyboards.length > 0 && (
                    <div className="flex flex-col gap-5">
                        <Badge className="gap-1 text-base uppercase border-primary py-[0.365rem] border-2 w-fit mx-5" variant={"outline"}>
                            <KeyboardIcon />
                            Teclados em Promoção
                        </Badge>
                        <ProductList products={keyboards} />
                    </div>
                )
            }
            {
                headphones.length > 0 && (
                    <div className="flex flex-col gap-5">
                        <Badge className="gap-1 text-base uppercase border-primary py-[0.365rem] border-2 w-fit mx-5" variant={"outline"}>
                            <HeadphonesIcon />
                            Headphones em Promoção
                        </Badge>
                        <ProductList products={headphones} />
                    </div>
                )
            }
            {
                mousepads.length > 0 && (
                    <div className="flex flex-col gap-5">
                        <Badge className="gap-1 text-base uppercase border-primary py-[0.365rem] border-2 w-fit mx-5" variant={"outline"}>
                            <MousePointerSquare />
                            Mousepads em Promoção
                        </Badge>
                        <ProductList products={mousepads} />
                    </div>
                )
            }
            {
                monitors.length > 0 && (
                    <div className="flex flex-col gap-5">
                        <Badge className="gap-1 text-base uppercase border-primary py-[0.365rem] border-2 w-fit mx-5" variant={"outline"}>
                            <Monitor />
                            Monitores em Promoção
                        </Badge>
                        <ProductList products={monitors} />
                    </div>
                )
            }
            {
                speakers.length > 0 && (
                    <div className="flex flex-col gap-5">
                        <Badge className="gap-1 text-base uppercase border-primary py-[0.365rem] border-2 w-fit mx-5" variant={"outline"}>
                            <SpeakerIcon />
                            Speakers em Promoção
                        </Badge>
                        <ProductList products={speakers} />
                    </div>
                )
            }
        </div>
    );
}

