import { ReactElement, useState } from "react";
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
            "Developmental Disorders",
            "Drug Development",
            "General",
            "Genetic Disorders",
            "Immunological Diseases",
            "Infectious Diseases",
            "Metabolic Disorders",
            "Neurological Disorders",
            "Psychiatric Disorders",
            "Public Health",
            "Rare Diseases",
            "Various Diseases",
        ],
    };

    const nrOfCheckboxes = (filters.dataTypes.concat(filters.diseaseTypes).length);
    const checkedListBoolArr = Array.apply(null, Array(nrOfCheckboxes)).map(function () { return false });

    const [checkedList, setCheckedList] = useState<boolean[]>(checkedListBoolArr);

    const dataSourcesURI: string = 'https://raw.githubusercontent.com/ScilifelabDataCentre/data.scilifelab.se/develop/data/data_sources.json';
    // const dataSourcesURI: string = 'https://raw.githubusercontent.com/SevLG/data.scilifelab.se/patch-1/data/data_sources.json';

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
                if (!dataSource.disease_type.map(tag => tag.toLowerCase()).includes(filter.toLowerCase())) {
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
            <div className="flex flex-col space-y-6 col-span-2">
                {dataSourcesJSON
                    .filter(data => applyDataTypeFilter(data))
                    .filter(data => applyDiseaseTypeFilter(data))
                    .filter(data => applySearchBar(data))
                    .map((item, index) => (
                            <div key={index} className="form-control rounded-[10px] shadow border-2 border-neutral">
                                <div className="bg-neutral p-3 flow-root rounded-t-[8px] pr-4">
                                    <a href={item.url} target="_blank" className="text-neutral-content float-left text-xl">{item.name}</a>
                                    <img className="float-right w-62 h-12 object-scale-down object-right pl-2" src={"/img/datasources/" + item.thumbnail.split("/").pop()?.split(".")[0] + ".png"} alt={item.name} />                            
                                </div>
                                <p className="p-3">{item.description}</p>
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
            <div className="grid grid-cols-3 text-neutral-content pt-16">
                <div className="space-y-6 col-span-1">
                    <div className="flex flex-col space-y-2 w-80">
                        <label className="font-bold text-xl">Search</label>
                        <input 
                            type="text"
                            name="search"
                            placeholder="Name/Keywords" 
                            className="input bg-neutral input-bordered border-neutral rounded-[10px]"
                            defaultValue={searchBar} 
                            onChange={e => setSearchBar(e.target.value)} 
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <h2 className="font-bold text-xl">Data Type</h2>
                        <div className="form-control w-80 rounded-[10px] shadow border-2 border-neutral p-3">
                            {filters.dataTypes.map((element, index) =>
                                <div className="flex flex-row">
                                    <label key={element} className="label cursor-pointer">
                                        <input 
                                            type="checkbox" 
                                            className="checkbox border-gray-300 [--chkbg:theme(colors.primary)] [--chkfg:white]"
                                            onChange={() => checkedDataFilter("dataType", element.toLowerCase(), index)}
                                            checked={checkedList[index]}
                                        />
                                    </label>
                                    <span className="label-text text-neutral-content pt-2.5 pl-2">{element}</span>
                                </div>
                            )}
                        </div>
                        <h2 className="font-bold pt-4 text-xl">Disease Type</h2>
                        <div className="form-control w-80 rounded-[10px] shadow border-2 border-neutral p-3">
                            {filters.diseaseTypes.map((element, index) =>
                                <div className="flex flex-row">
                                    <label key={element} className="label cursor-pointer">
                                        <input 
                                            type="checkbox" 
                                            className="checkbox border-gray-300 [--chkbg:theme(colors.primary)] [--chkfg:white]"
                                            onChange={() => checkedDataFilter("diseaseType", element.toLowerCase(), filters.dataTypes.length+index)}
                                            checked={checkedList[filters.dataTypes.length+index]}
                                        />
                                    </label>
                                    <span className="label-text text-neutral-content pt-2.5 pl-2">{element}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <RenderDataSources/>
            </div>
        </>
    );
}