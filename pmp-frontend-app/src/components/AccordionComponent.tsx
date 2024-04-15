import { ReactElement } from 'react'

export default function AccordionComponent(): ReactElement {

    return (
        <>
            <div className="collapse collapse-arrow bg-neutral">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content"> 
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-neutral">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content"> 
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-neutral">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content"> 
                    <p>hello</p>
                </div>
            </div>
        </>
    );
}