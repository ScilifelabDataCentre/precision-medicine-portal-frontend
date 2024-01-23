import { ReactElement } from "react";

export default function TextBarComponent(prop: { classes: string, text: string }): ReactElement {
    return (
        <div className={prop.classes}>
            <p>{prop.text}</p>
        </div>
    );
};