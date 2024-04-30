import { ChangeEvent, ReactElement, useState } from "react";
import React from "react";
import axios from 'axios';

export default function DataSourcesComponent(): ReactElement {
    // const [inputFields, setInputFields] = useState({
    //     name: "",
    // });

    const dataSourcesJSON: string = 'https://raw.githubusercontent.com/ScilifelabDataCentre/data.scilifelab.se/develop/data/data_sources.json';
    const dataSourcesData: object[] = []

    function getData(){
        axios.get(dataSourcesJSON)
            .then(response => {
                const data = response.data;
                data.forEach( (element: any) => {
                    if (element.ddls.includes('Precision Medicine and Diagnostics')) {
                        dataSourcesData.push(element);
                    }
                });
            })
            .catch(response => console.log(response.error))
    }


    return (
        <>
            <button onClick={getData}>Clickme</button>
        </>
    );
}