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
                    <p>We are one out of the four Data Driven Life Science's nodes at SciLifeLab; our node is hosted by Karolinska Institutet. Established in late 2023, we are currently organising our efforts to develop technologies and data support that aid Swedish precision medicine researchers and bridge the gap between hospital and research. By providing robust data science tools and support, we aim to empower researchers who focus on enhancing diagnostics and personalised treatment strategies, facilitating the translation of precision medicine innovations into clinical practice. Our work is specifically driven by the Data Centre, a central hub within SciLifeLab. </p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-neutral">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                    How do you take the FAIR principles into account in your work?
                </div>
                <div className="collapse-content"> 
                    <p>We incorporate the FAIR principles by keeping our code open on a GitHub repository (link) and want to offer several dashboards with open data for researchers. We aim to make data on our portal findable and accessible, as well as providing detailed dataset descriptions, thus enhancing reusability. We address interoperability on our platform by actively participating in national and international projects that aim to create a cohesive precision medicine ecosystem and a coordinated exchange system of data between regions and EU countries.  </p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-neutral">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                    How can I provide feedback or suggest improvements for the portal??
                </div>
                <div className="collapse-content"> 
                    <p>We highly value your feedback. Please share your suggestions and comments through the contact form. </p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-neutral">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                    Where do the courses and events you diplay come from? Where can I submit event information? 
                </div>
                <div className="collapse-content"> 
                    <p>The majority of events and training sessions are sourced from external APIs, with contributions from both SciLifeLab Training Hub and NBIS. If you have an API that enables the fetching of relevant events in the fields of precision medicine and diagnostics, please reach out to our team via the contact form. If you have individual events or courses that you would like us to feature, please contact us, and we could display it on our page. In the future, we plan to offer a specific form that will allow you to submit all the required information directly. Please stay tuned for this update.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-neutral">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                    How was the data sources list curated? Can I add specific data sources myself?
                </div>
                <div className="collapse-content"> 
                    <p>The Data Centre's data stewards have manually searched for, collected, and summarised the displayed data sources. We recognise that new sources are continually emerging and strive to keep our data updated and accurate. If you think we have missed a source or have mislabelled one, please contact us using the contact form..</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-neutral">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                    How can I showcase my research data on the portal?
                </div>
                <div className="collapse-content"> 
                    <p>We are always eager to collaborate and support the Swedish precision medicine and diagnostics research community. If you would like your project or data source to be featured as a separate page on this portal, please reach out to us via the contact form.</p>
                </div>
            </div>
        </>
    );
}