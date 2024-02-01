import { ReactElement } from "react";
import { ICardConfig, ICardContent } from "../interfaces/types";

export default function CardComponent(prop: { CardConfig: ICardConfig, CardContent: ICardContent }): ReactElement {
    const title: ReactElement = (
        <h2 className={prop.CardConfig.titleClasses}>{prop.CardContent.title}</h2>
    );

    const image: ReactElement = (
        <figure><img src={prop.CardContent.imageSrc} alt={prop.CardContent.imageAlt} /></figure>
    );

    var buttonClasses: string = "card-actions " + prop.CardConfig.buttonPlacement;
    const button: ReactElement = (
        <div className={buttonClasses}>
            <button className={prop.CardConfig.buttonClasses}>{prop.CardContent.buttonText}</button>
        </div>
    );
    
    return (
        <div className={"card " + prop.CardConfig.cardClasses}>
            {prop.CardContent.imageSrc && image}
            <div className="card-body">
                {prop.CardContent.title && title}
                <p className={prop.CardConfig.textClasses}>{prop.CardContent.text}</p>
                {prop.CardContent.buttonText && button}
            </div>
        </div>
    );
}