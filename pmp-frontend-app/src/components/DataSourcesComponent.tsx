import { ChangeEvent, ReactElement, useState } from "react";
import React from "react";
import axios from 'axios';
import { IDataSourceFilters, IDataSourcesDC } from "../interfaces/types";
import { diseaseTypesJSON } from "../assets/data/repositories_and_Disease_Types";

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
            "Biobank",
            "Chemical Biology",
            "Clinical",
            "Enzymes, Pathways, Interactions",
            "Epidemiology",
            "Evolution and Phylogeny",
            "General",
            "Genes and Genomes",
            "Imaging",
            "Molecular and Cellular Structures",
            "Phenotypic",
            "Proteins and Proteomes",
        ],
        diseaseTypes: 
        [
            "Cancer",
            "Cardiovascular Diseases",
            "Neurological Disorders",
            "Genetic Disorders",
            "Metabolic Disorders",
            "Infectious Diseases",
            "Developmental Disorders",
            "Rare Diseases",
            "Drug Development",
            "Public Health",
            "Immunological Diseases",
            "Psychiatric Disorders",
            "General",
            "Various Diseases",
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
        // console.log(dataSourcesJSON.length);
        let name_list_source: string[] = [];
        let name_list_mapping: string[] = [];
        for (let i = 0; i < dataSourcesJSON.length; i++) {
            name_list_source.push(dataSourcesJSON[i].name);
            name_list_mapping.push(diseaseTypesJSON[i].name);
        }
        let name_list_source_sorted = name_list_source.sort((a, b) => a.localeCompare(b))
        let name_list_mapping_sorted = name_list_mapping.sort((a, b) => a.localeCompare(b))
        for (let i = 0; i < dataSourcesJSON.length; i++) {
            if (name_list_source_sorted[i] != name_list_mapping_sorted[i]) {
                console.log("MISMATCH")
                console.log("källfil: ".concat(name_list_source_sorted[i]));
                console.log("mappningsfil: ".concat(name_list_mapping_sorted[i]));
            }
        }
        
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

    function applyDataTypeFilter(dataSource: IDataSourcesDC) {
        if (selectedFilters.dataTypes.length === 0) {
            return true;
        } else {
            let filter: string;
            for (filter of selectedFilters.dataTypes) {
                if (!dataSource.data.map(tag => tag.toLowerCase()).includes(filter.toLowerCase())) {
                    return false;
                }
            }
            return true;
        }
    }

    function applyDiseaseTypeFilter(dataSource: IDataSourcesDC) {
        if (selectedFilters.diseaseTypes.length === 0) {
            return true;
        } else {
            let filter: string;
            for (filter of selectedFilters.diseaseTypes) {
                for (let i = 0; i < diseaseTypesJSON.length; i++) {
                    if (diseaseTypesJSON[i].name.toLowerCase() === dataSource.name.toLocaleLowerCase()) {
                        let linkedDiseaseTypes: string[] = diseaseTypesJSON[i].diseaseTypes.split(", ");
                        if (!linkedDiseaseTypes.map(tag => tag.toLowerCase()).includes(filter.toLowerCase())) {
                            return false;
                        }
                    }
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
                    .filter(data => applyDataTypeFilter(data))
                    .filter(data => applyDiseaseTypeFilter(data))
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
                        <label>Search</label>
                        <input 
                            type="text"
                            name="search"
                            placeholder="Name/Keywords" 
                            className="input bg-white input-bordered border-neutral w-full max-w-xs"
                            defaultValue={searchBar} 
                            onChange={e => setSearchBar(e.target.value)} 
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