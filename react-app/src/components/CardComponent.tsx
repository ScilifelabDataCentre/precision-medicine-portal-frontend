import { ReactElement } from "react";

export default function CardComponent(prop: { classes: string, title: string, text: string, button: string, buttonClasses: string }): ReactElement {
    const title: ReactElement = (
        <h2 className="text-center text-white text-xl font-semibold">{prop.title}</h2>
    );

    const button: ReactElement = (
        <div className="card-actions justify-center">
            <button className={prop.buttonClasses}>{prop.button}</button>
        </div>
    );
    
    return (
        <div className={"card " + prop.classes}>
            <div className="card-body">
                {prop.title && title}
                <p className="text-center content-end">{prop.text}</p>
                {prop.button && button}
            </div>
        </div>
    );
}