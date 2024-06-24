"use client"
import { useState } from "react";
import Image from "next/image";

interface ProductImagesProps {
    name: string
    imageUrls: string[]
}

const ProductImage = ({ imageUrls, name }: ProductImagesProps) => {
    // Define o estado inicial com a primeira imagem do array imageUrls
    const [currentImage, setCurrentImage] = useState<string>(imageUrls[0]);
    // Função para atualizar a imagem atual quando uma miniatura for clicada
    const handleImageClick = (imageUrl: string) => {
        setCurrentImage(imageUrl)
    }

    return (
        <div className="flex flex-col lg:w-3/5">
            <div className="bg-accent h-[380px] w-full flex items-center justify-center">
                <Image 
                    src={currentImage}
                    alt={name}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className='h-auto w-auto max-h-[70%] max-w-[80%] object-contain'
                    loading="lazy"
                />
            </div>
            <div>
                <div className="grid grid-cols-4 gap-2 mt-2">
                    
                    {
                        imageUrls.map((imageUrls) => (
                            <button key={imageUrls} className={`bg-accent h-[100px] flex items-center justify-center
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
                                    loading="lazy"
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