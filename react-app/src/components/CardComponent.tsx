import { ReactElement } from "react";

export default function CardComponent(prop: { classes: string, title: string, text: string, button: string }): ReactElement {
    const title: ReactElement = (
        <h2 className="text-center text-white text-xl font-semibold">{prop.title}</h2>
    );

    var buttonClasses: string = 'btn bg-fuchsia-950 text-white hover:bg-fuchsia-800 active:bg-fuchsia-900 focus:outline-none focus:ring focus:ring-fuchsia-300';
    const button: ReactElement = (
        <div className="card-actions justify-center">
            <button className={buttonClasses}>{prop.button}</button>
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