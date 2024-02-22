"use client"
import { useState } from "react";
import Image from "next/image";
interface ProductImagesProps {
    name: string
    imageUrls: string[]
}
const ProductImage = ({ imageUrls, name }: ProductImagesProps) => {
    const [currentImage, setCurrentImage] = useState(imageUrls[0])
    const handleImageClick = (imageUrl: string) => {
        setCurrentImage(imageUrl)
    }
    return (
        <div className="flex flex-col">

            <div className="bg-accent h-[380px w-full flex items-center justify-center">
                <Image 
                    src={currentImage}
                    alt={name}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className='h-auto w-auto max-h-[70%] max-w-[80%] object-contain'
                />
            </div>
            <div>
                <div className="grid grid-cols-4 gap-4 mt-8 px-5">
                    {
                        imageUrls.map((imageUrls) => (
                            <button key={imageUrls} className={`bg-accent h-[100px] flex items-center justify-center rounded-lg
                                ${
                                    imageUrls === currentImage && "border-2 border-primary border-solid"
                                }
                            `}
                                onClick={() => handleImageClick(imageUrls)}
                            >

                                <Image 
                                    src={imageUrls} 
                                    alt={name}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className='h-auto w-auto max-h-[70%] max-w-[80%]'
                                />
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default ProductImage;