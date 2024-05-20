import { ReactElement } from 'react'

export default function AccordionComponent(): ReactElement {

    return (
        <>
            <div className="collapse collapse-arrow bg-neutral">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                    What is the Data Science Node in Precision Medicine & Diagnostics?
                </div>
                <div className="collapse-content"> 
                    <p>TBD.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-neutral">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                    Where do the events & trainings you diplay come from? Can I submit events myself? 
                </div>
                <div className="collapse-content"> 
                    <p>The majority of events and trainings are sourced from external APIs. Both the SciLifeLab Training Hub and NBIS have contributed to this. If you have an API that enables the fetching of relevant events in the fields of precision medicine and diagnostics, please reach out to our team via the contact form. If you have individual events that you would like us to feature, you can also contact us, and we will display the event individually. We are currently developing a feature that will allow you to directly fill out a specific form with all the required information. Please await this update.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-neutral">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                    Where do the data sources you display come from? Can I add any other data sources myself?
                </div>
                <div className="collapse-content"> 
                    <p>Data Centre's data stewards have manually searched for, collected, and summarized the data sources displayed. We recognize the continuous growth of new sources and strive to update our data constantly. If you think we have missed a source or if you would like to add a specific one, please reach out to us via the contact form.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-neutral">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                    Can we collaborate to develop a new dashboard that displays data and research highlights?
                </div>
                <div className="collapse-content"> 
                    <p>We are always eager to collaborate and support the Swedish precision medicine and diagnostics research community. If you would like your project or data source to be featured as a separate page on this portal, please reach out to us via the contact form.</p>
                </div>
            </div>
        </>
    );
}