interface PromotionalBannerProps {
    src: string;
    alt: string;
}
const PromotionalBanner = ({ src, alt}: PromotionalBannerProps) => {
    return ( 
        <img className="h-auto w-full rounded-lg"
            src={src}
            alt={alt}
        />
     );
}
 
export default PromotionalBanner;