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
            width={1280}
            height={415}
            className="h-auto w-full"
        />
    );
}
export default PromotionalBanner;