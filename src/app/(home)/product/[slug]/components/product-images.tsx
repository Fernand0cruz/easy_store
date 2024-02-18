"use client"
import { useState } from "react";
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
                <img src={currentImage + "?text=" + name + " img"} alt={name}
                    className='h-auto w-auto max-h-[70%] max-w-[80%]'
                    style={{
                        objectFit: "contain"
                    }}
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

                                <img src={imageUrls + "?text=" + name + " img"} alt={name}
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