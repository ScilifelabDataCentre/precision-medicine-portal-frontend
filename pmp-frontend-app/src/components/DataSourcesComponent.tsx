import { ChangeEvent, ReactElement, useState } from "react";
import React from "react";
import axios from 'axios';
import { IDataSourceFilters, IDataSourcesDC } from "../interfaces/types";

export default function DataSourcesComponent(): ReactElement {
    const [dataSourcesJSON, setDataSourcesJSON] = useState<IDataSourcesDC[]>([]);
    const [selectedFilters, setSelectedFilters] = useState<IDataSourceFilters>({
        dataTypes: [],
        diseaseTypes: [],
    });
    const [searchBar, setSearchBar] = useState<string>("");

    const filters: IDataSourceFilters = {
        dataTypes: 
        [
            "Genomics",
            "Proteomics",
            "Clinical Data",
            "Metabolomics",
        ],
        diseaseTypes: 
        [
            "Cancer",
            "Cardiovascular Disease",
            "Diabetes",
            "Autoimmune Disease",
        ],
    };

    const nrOfCheckboxes = (filters.dataTypes.concat(filters.diseaseTypes).length);
    const checkedListBoolArr = Array.apply(null, Array(nrOfCheckboxes)).map(function () { return false });

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
        let tag_list: string[] = [];
        let item: IDataSourcesDC;
        for (item of dataSourcesJSON) {
            let tag: string;
            for (tag of item.search_tags) {
                tag_list.includes(tag) ? null : tag_list.push(tag);
            }
        }
        let tag_list_sorted = tag_list.sort((a, b) => a.localeCompare(b))
        console.log(tag_list_sorted)
    }

    function checkedDataFilter(tagType: string, tagName: string, boxIndex: number) {
        let tmpFilters = selectedFilters;
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

        
        setSelectedFilters(tmpFilters);
        setCheckedList(tmpCheckedList);
    }

    function applySelectedFilters(dataSource: IDataSourcesDC) {
        const checkedFilters = selectedFilters.dataTypes.concat(selectedFilters.diseaseTypes);
        if (checkedFilters.length === 0) {
            return true;
        } else {
            let filter: string;
            for (filter of checkedFilters) {
                if (!dataSource.search_tags.map(tag => tag.toLowerCase()).includes(filter)) {
                    return false;
                }
            }
            return true;
        }
    }

    function applySearchBar(dataSource: IDataSourcesDC) {
        const searchBarLower = searchBar.toLowerCase();
        const searchTags: string[] = searchBarLower.split(" ");
        if (searchBarLower.length === 0) {
            return true;
        } else {
            if (dataSource.name.toLowerCase().includes(searchBarLower)) {
                return true;
            } else {
                let searchTag: string;
                for (searchTag of searchTags) {
                    if (dataSource.search_tags.map(tag => tag.toLowerCase()).includes(searchTag) ||
                        dataSource.search_tags.map(tag => tag.toLowerCase()).includes(searchBarLower)) {
                        return true;
                    }
                }
                return false;
            }
        }
    }

    function RenderDataSources(): ReactElement {
        return (
            <div className="flex flex-col">
                {dataSourcesJSON
                    .filter(data => applySelectedFilters(data))
                    .filter(data => applySearchBar(data))
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

    return (
        <>
            <div className="grid grid-cols-2">
                <div>
                    <div className="flex flex-col space-y-2">
                        <label>Name</label>
                        <input 
                            type="text"
                            name="search"
                            placeholder="Name/Keywords" 
                            className="input bg-white input-bordered border-neutral w-full max-w-xs"
                            defaultValue={searchBar} 
                            onChange={e => setSearchBar(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="flex flex-col">
                        <div className="form-control w-32 bg-opacity-95 rounded-[10px] shadow border-2 border-neutral">
                            <h2>Data Type</h2>
                            {filters.dataTypes.map((element, index) => 
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
                            {filters.diseaseTypes.map((element, index) => 
                                <label key={element} className="label cursor-pointer">
                                    <span className="label-text">{element}</span> 
                                    <input 
                                        type="checkbox" 
                                        className="checkbox" 
                                        onChange={() => checkedDataFilter("diseaseType", element.toLowerCase(), filters.dataTypes.length+index)}
                                        checked={checkedList[filters.dataTypes.length+index]}
                                    />
                                </label>
                            )}
                        </div>
                    </div>
                </div>
                <RenderDataSources/>
                <button onClick={getData}>click</button>
                <button onClick={checkData}>click</button>
            </div>
        </>
    );
}