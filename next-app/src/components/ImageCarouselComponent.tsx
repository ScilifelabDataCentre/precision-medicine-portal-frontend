import { ReactElement } from "react";
import Image from 'next/image';

export default function ImageCarouselComponent(): ReactElement {
    return (
        <div className="carousel carousel-center rounded-box py-10">
            <div className="carousel-item">
                <Image src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Pizza" />
            </div> 
            <div className="carousel-item">
                <Image src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Pizza" />
            </div> 
            <div className="carousel-item">
                <Image src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Pizza" />
            </div> 
        </div>
    );
}