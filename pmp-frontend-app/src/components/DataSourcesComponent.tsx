import { ChangeEvent, ReactElement, useState } from "react";
import React from "react";
import axios from 'axios';
import { IDataSourceFilters, IDataSourcesDC } from "../interfaces/types";

export default function DataSourcesComponent(): ReactElement {
    const [dataSourcesJSON, setDataSourcesJSON] = useState<IDataSourcesDC[]>([]);
    const [filters, setFilters] = useState<IDataSourceFilters>({
        dataTypes: [],
        diseaseTypes: [],
    });

    const dataTypes = [
        "Genomics",
        "Proteomics",
    ]
    const diseaseTypes = [
        "Cancer",
        "Cardiovascular Disease",
    ]

    const nrOfCheckboxes = (dataTypes.concat(diseaseTypes).length)
    const checkedListBoolArr = Array.apply(null, Array(nrOfCheckboxes)).map(function () { return false })

    const [checkedList, setCheckedList] = useState<boolean[]>(checkedListBoolArr);

    const dataSourcesURI: string = 'https://raw.githubusercontent.com/ScilifelabDataCentre/data.scilifelab.se/develop/data/data_sources.json';

    async function getData(){
        setDataSourcesJSON([]);
        const tmpDataSourcesJSON: IDataSourcesDC[] = []
        let responseData: IDataSourcesDC[] = [];
        await axios.get(dataSourcesURI)
            .then(response => {
                responseData = response.data;
            })
            .catch(response => console.log(response.error))
        
        responseData.forEach( (element: IDataSourcesDC) => {
            if (element.ddls.includes('Precision Medicine and Diagnostics')) {
                tmpDataSourcesJSON.push(element);
            }
        });
        setDataSourcesJSON(tmpDataSourcesJSON);
    }

    function checkData() {
        // console.log(typeof(dataSourcesJSON));
        // console.log(Array.isArray(dataSourcesJSON));
        // console.log(dataSourcesJSON.length);
        // console.log(dataSourcesJSON[0]);
        // console.log(Object.keys(dataSourcesJSON));
        console.log(dataSourcesJSON.filter(data => filterDataSources(data)));
    }

    function checkedDataFilter(tagType: string, tagName: string, boxIndex: number) {
        let tmpFilters = filters;
        let tmpCheckedList = [...checkedList];

        switch (tagType) {
            case "dataType":
                if (tmpFilters.dataTypes.includes(tagName)) {
                    tmpFilters.dataTypes = tmpFilters.dataTypes.filter(item => item != tagName);
                    tmpCheckedList[boxIndex] = false;
                } else {
                    tmpFilters.dataTypes.push(tagName);
                    tmpCheckedList[boxIndex] = true;
                }
                break;
            case "diseaseType":
                if (tmpFilters.diseaseTypes.includes(tagName)) {
                    tmpFilters.diseaseTypes = tmpFilters.diseaseTypes.filter(item => item != tagName);
                    tmpCheckedList[boxIndex] = false;
                } else {
                    tmpFilters.diseaseTypes.push(tagName);
                    tmpCheckedList[boxIndex] = true;
                }
                break;
        }

        
        setFilters(tmpFilters);
        setCheckedList(tmpCheckedList);
        // console.log(filters);
    }

    function filterDataSources(dataSource: IDataSourcesDC) {
        const selectedFilters = filters.dataTypes.concat(filters.diseaseTypes);
        if (selectedFilters.length === 0) {
            return true;
        } else {
            let filter: string;
            for (filter of selectedFilters) {
                if (dataSource.search_tags.map(tag => tag.toLowerCase()).includes(filter)) {
                    // console.log(filter);
                    // console.log(dataSource.name);
                    // console.log(dataSource.search_tags);
                    return true;
                }
            }
            return false;
        }
    }

    function RenderDataSources(): ReactElement {
        return (
            <div className="flex flex-col">
                {dataSourcesJSON
                    .filter(data => filterDataSources(data))
                    .map((item, index) => (
                        <div key={index} className="form-control bg-opacity-95 rounded-[10px] shadow border-2 border-neutral">
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                        </div>
                ))}
            </div>
        );
    }

    React.useEffect(() =>{
        getData();
    }, []);

    // React.useEffect(() =>{
    // }, [checkedList]);


    return (
        <>
            <div className="grid grid-cols-2">
                <div className="flex flex-col">
                    <div className="form-control w-32 bg-opacity-95 rounded-[10px] shadow border-2 border-neutral">
                        <h2>Data Type</h2>
                        {dataTypes.map((element, index) => 
                            <label key={element} className="label cursor-pointer">
                                <span className="label-text">{element}</span> 
                                <input 
                                    type="checkbox" 
                                    className="checkbox" 
                                    onChange={() => checkedDataFilter("dataType", element.toLowerCase(), index)}
                                    checked={checkedList[index]}
                                />
                            </label>
                        )}
                    </div>
                    <div className="form-control w-32 bg-opacity-95 rounded-[10px] shadow border-2 border-neutral">
                        <h2>Disease Type</h2>
                        {diseaseTypes.map((element, index) => 
                            <label key={element} className="label cursor-pointer">
                                <span className="label-text">{element}</span> 
                                <input 
                                    type="checkbox" 
                                    className="checkbox" 
                                    onChange={() => checkedDataFilter("diseaseType", element.toLowerCase(), dataTypes.length+index)}
                                    checked={checkedList[dataTypes.length+index]}
                                />
                            </label>
                        )}
                    </div>
                </div>
                <RenderDataSources/>
                <button onClick={getData}>click</button>
                <button onClick={checkData}>click</button>
            </div>
        </>
    );
}