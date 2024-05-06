import { ChangeEvent, ReactElement, useState } from "react";
import React from "react";
import axios from 'axios';
import { IDataSourceFilters } from "../interfaces/types";

export default function DataSourcesComponent(): ReactElement {
    const [filters, setFilters] = useState<IDataSourceFilters>({
        dataTypes: [],
        diseaseTypes: [],
    });

    const dataSourcesJSON: string = 'https://raw.githubusercontent.com/ScilifelabDataCentre/data.scilifelab.se/develop/data/data_sources.json';
    const dataSourcesUnfiltered: object[] = [];

    function getData(){
        dataSourcesUnfiltered.splice(0,dataSourcesUnfiltered.length)
        axios.get(dataSourcesJSON)
            .then(response => {
                const data = response.data;
                data.forEach( (element: any) => {
                    if (element.ddls.includes('Precision Medicine and Diagnostics')) {
                        dataSourcesUnfiltered.push(element);
                    }
                });
            })
            .catch(response => console.log(response.error))
        console.log(typeof(dataSourcesUnfiltered));
        console.log(Array.isArray(dataSourcesUnfiltered));
        console.log(dataSourcesUnfiltered.length);
        console.log(dataSourcesUnfiltered);
        console.log(Object.keys(dataSourcesUnfiltered));
    }

    function checkedDataFilter(tagType: string, tagName: string) {
        let tmp_filters: IDataSourceFilters = {
            dataTypes: [],
            diseaseTypes: [],
        };

        tmp_filters = filters;

        switch (tagType) {
            case "dataType":
                if (tmp_filters.dataTypes.includes(tagName)) {
                    tmp_filters.dataTypes = tmp_filters.dataTypes.filter(item => item != tagName);
                } else {
                    tmp_filters.dataTypes.push(tagName);
                }
                break;
            case "diseaseType":
                if (tmp_filters.diseaseTypes.includes(tagName)) {
                    tmp_filters.diseaseTypes = tmp_filters.diseaseTypes.filter(item => item != tagName);
                } else {
                    tmp_filters.diseaseTypes.push(tagName);
                }
                break;
        }

        setFilters(tmp_filters);

        console.log(filters);
    }

    return (
        <>
            {dataSourcesUnfiltered ? null : getData()}
            <div className="grid grid-cols-2">
                <div className="flex flex-col">
                    <div className="form-control w-32 bg-opacity-95 rounded-[10px] shadow border-2 border-neutral">
                        <h2>Data Type</h2>
                        <label className="label cursor-pointer">
                            <span className="label-text">Genomics</span> 
                            <input type="checkbox" className="checkbox" onChange={() => checkedDataFilter("dataType", "genomics")}/>
                        </label>
                        <label className="label cursor-pointer">
                            <span className="label-text">Proteomics</span> 
                            <input type="checkbox" className="checkbox" onChange={() => checkedDataFilter("dataType", "proteomics")}/>
                        </label>
                    </div>
                    <div className="form-control w-32 bg-opacity-95 rounded-[10px] shadow border-2 border-neutral">
                        <h2>Disease Type</h2>
                        <label className="label cursor-pointer">
                            <span className="label-text">Cancer</span> 
                            <input type="checkbox" className="checkbox" onChange={() => checkedDataFilter("diseaseType", "cancer")}/>
                        </label>
                        <label className="label cursor-pointer">
                            <span className="label-text">Cardiovascular Disease</span> 
                            <input type="checkbox" className="checkbox" onChange={() => checkedDataFilter("diseaseType", "cardiovascular disease")}/>
                        </label>
                    </div>
                </div>
                <div className="flex flex-row">
                    <p>test</p>
                    {dataSourcesUnfiltered.map(item => (
                        <div className="form-control bg-opacity-95 rounded-[10px] shadow border-2 border-neutral">
                            {JSON.stringify(item)[0]}
                        </div>
                    ))}
                    <button onClick={getData}>click</button>
                </div>
            </div>
        </>
    );
}