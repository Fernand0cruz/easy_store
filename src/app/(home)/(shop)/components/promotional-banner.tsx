import Image from "next/image";

interface PromotionalBannerProps {
    src: string;
    alt: string;
}
const PromotionalBanner = ({ src, alt }: PromotionalBannerProps) => {
    return (
            <Image
                src={src}
                alt={alt}
                width={0}
                height={0}
                sizes="100vw"
                className="h-auto w-full rounded-lg"
            />
    );
}

export default PromotionalBanner;