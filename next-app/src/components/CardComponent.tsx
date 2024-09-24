import { ReactElement } from "react";
import { ICardConfig, ICardContent } from "@/interfaces/types";
import Image from 'next/image';

export default function CardComponent(prop: { cardConfig: ICardConfig, cardContent: ICardContent }): ReactElement {
    const title: ReactElement = (
        <>
            <h2 className={prop.cardConfig.titleClasses}>{prop.cardContent.title}</h2>
            { prop.cardContent.subTitle && (<h2 className={prop.cardConfig.subTitleClasses}>{prop.cardContent.subTitle}</h2>) }
        </>
    );

    const image: ReactElement = (
        <>
            <Image src={prop.cardContent.imageSrc} alt={prop.cardContent.imageAlt} className={prop.cardConfig.imgClasses} />
        </>
    );

    const buttonClasses: string = "card-actions " + prop.cardConfig.buttonPlacement;
    const button: ReactElement = (
        <div className={buttonClasses}>
            <button className={prop.cardConfig.buttonClasses}>{prop.cardContent.buttonText}</button>
        </div>
    );
    
    return (
        <div className={"card " + prop.cardConfig.cardClasses}>
            {prop.cardContent.imageSrc && image}
            <div className="card-body">
                {prop.cardContent.title && title}
                <p className={prop.cardConfig.textClasses}>{prop.cardContent.text}</p>
                {prop.cardContent.buttonText && button}
            </div>
        </div>
    );
}