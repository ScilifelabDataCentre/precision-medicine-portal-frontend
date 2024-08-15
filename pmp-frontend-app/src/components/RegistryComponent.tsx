import { ReactElement, useState, useEffect } from "react";
import registryData from "../assets/Kvalitetsregister_with_Links.json"; // Update the path to your JSON file
import { RegistrySources, RegistrySourcesFilters } from "../interfaces/types";

export default function RegistryComponent(): ReactElement {
    const [RegistrySourcesJSON, setRegistrySourcesJSON] = useState<RegistrySources[]>([]);
    const [selectedFilters, setSelectedFilters] = useState<RegistrySourcesFilters>({
        registryCentre: [],
        geographicLocation: [],
    });
    const [searchBar, setSearchBar] = useState<string>("");

    const filters: RegistrySourcesFilters = {
        registryCentre: [
            "Kvalitetsregistercentrum Stockholm",
            "Registercentrum Syd",
            "Registercentrum Norr",
            "UCR - Uppsala Clinical Research Center",
            "Registercentrum Västra Götaland",
            "Registercentrum Sydost - RCSO",
        ],
        geographicLocation: [
            "National",
            "Regional",
        ],
    };

    const nrOfCheckboxes = filters.registryCentre.length + filters.geographicLocation.length;
    const checkedListBoolArr = Array(nrOfCheckboxes).fill(false);

    const [checkedList, setCheckedList] = useState<boolean[]>(checkedListBoolArr);

    useEffect(() => {
        setRegistrySourcesJSON(registryData);
    }, []);

    function checkedDataFilter(tagType: string, tagName: string, boxIndex: number) {
        let tmpFilters = { ...selectedFilters };
        let tmpCheckedList = [...checkedList];

        switch (tagType) {
            case "registryCentre":
                if (tmpFilters.registryCentre.includes(tagName)) {
                    tmpFilters.registryCentre = tmpFilters.registryCentre.filter(item => item !== tagName);
                    tmpCheckedList[boxIndex] = false;
                } else {
                    tmpFilters.registryCentre.push(tagName);
                    tmpCheckedList[boxIndex] = true;
                }
                break;
            case "geographicLocation":
                if (tmpFilters.geographicLocation.includes(tagName)) {
                    tmpFilters.geographicLocation = tmpFilters.geographicLocation.filter(item => item !== tagName);
                    tmpCheckedList[boxIndex] = false;
                } else {
                    tmpFilters.geographicLocation.push(tagName);
                    tmpCheckedList[boxIndex] = true;
                }
                break;
        }

        setSelectedFilters(tmpFilters);
        setCheckedList(tmpCheckedList);
    }

    function applyRegistryCentreFilter(RegistrySource: RegistrySources) {
        if (selectedFilters.registryCentre.length === 0) return true;

        return selectedFilters.registryCentre.every(filter =>
            RegistrySource.registry_centre
                .map((centre: string) => centre.toLowerCase())
                .includes(filter.toLowerCase())
        );
    }

    function applyGeographicLocationFilter(RegistrySource: RegistrySources) {
        if (selectedFilters.geographicLocation.length === 0) return true;

        return selectedFilters.geographicLocation.every(filter =>
            RegistrySource.geographic_location
                .map((location: string) => location.toLowerCase())
                .includes(filter.toLowerCase())
        );
    }

    function applySearchBar(RegistrySource: RegistrySources) {
        const searchBarLower = searchBar.toLowerCase();
        const searchTags: string[] = searchBarLower.split(" ");
        if (searchBarLower.length === 0) return true;

        return (
            RegistrySource.name.toLowerCase().includes(searchBarLower) ||
            searchTags.some(tag =>
                RegistrySource.search_tags.some((searchTag: string) =>
                    searchTag.toLowerCase().includes(tag)
                )
            )
        );
    }

    function RenderRegistrySources(): ReactElement {
        if (!Array.isArray(RegistrySourcesJSON) || RegistrySourcesJSON.length === 0) {
            return <div>Loading...</div>; // or handle the empty state differently
        }

        return (
            <div className="flex flex-col space-y-6 col-span-2">
                {RegistrySourcesJSON
                    .filter(data => applyRegistryCentreFilter(data))
                    .filter(data => applyGeographicLocationFilter(data))
                    .filter(data => applySearchBar(data))
                    .map((item, index) => (
                        <div key={index} className="form-control rounded-[10px] shadow border-2 border-neutral">
                            <div className="bg-neutral p-3 flow-root rounded-t-[8px] pr-4">
                                <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-neutral-content float-left text-xl">
                                    {item.name}
                                </a>
                            </div>
                            <p className="p-3">{item.description || "Description not available."}</p>
                        </div>
                    ))}
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4 pt-16">
            <div className="flex flex-col lg:flex-row gap-12"> {/* Increased gap between columns */}
                {/* Left Column */}
                <div className="space-y-6 w-full lg:w-1/4"> {/* Reduced width for more space */}
                    {/* Info Box aligned with search bar and filter options */}
                    <div className="bg-[#E9F2D1] text-black p-4 mb-4 rounded-md text-sm"> {/* Smaller text */}
                        <p className="text-center">
                            The Swedish registries hold detailed, personalised information about medical treatments, procedures, and their results. These are seamlessly incorporated into clinical practices and have the ability to generate data in real-time.
                        </p>
                        <p className="text-center mt-2">
                            <span className="font-bold">Please note:</span> most of the registries mainly collect data in Swedish.
                        </p>
                    </div>

                    <div>
                        <label className="font-bold text-xl block mb-2">Search</label>
                        <input
                            type="text"
                            name="search"
                            placeholder="Name/Keywords"
                            className="input bg-neutral input-bordered border-neutral rounded-[10px] w-full"
                            value={searchBar}
                            onChange={e => setSearchBar(e.target.value)}
                        />
                    </div>
                    <div>
                        <h2 className="font-bold text-xl block mb-2">Registry Centre</h2>
                        <div className="form-control w-full rounded-[10px] shadow border-2 border-neutral p-3">
                            {filters.registryCentre.map((element, index) => (
                                <div key={element} className="flex flex-row">
                                    <label className="label cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="checkbox border-gray-300 [--chkbg:theme(colors.primary)] [--chkfg:white]"
                                            onChange={() => checkedDataFilter("registryCentre", element.toLowerCase(), index)}
                                            checked={checkedList[index]}
                                        />
                                    </label>
                                    <span className="label-text text-neutral-content pt-2.5 pl-2">{element}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2 className="font-bold text-xl block mb-2">Geographic Location</h2>
                        <div className="form-control w-full rounded-[10px] shadow border-2 border-neutral p-3">
                            {filters.geographicLocation.map((element, index) => (
                                <div key={element} className="flex flex-row">
                                    <label className="label cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="checkbox border-gray-300 [--chkbg:theme(colors.primary)] [--chkfg:white]"
                                            onChange={() => checkedDataFilter("geographicLocation", element.toLowerCase(), filters.registryCentre.length + index)}
                                            checked={checkedList[filters.registryCentre.length + index]}
                                        />
                                    </label>
                                    <span className="label-text text-neutral-content pt-2.5 pl-2">{element}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="w-full lg:w-3/4"> {/* Increased width for the right column */}
                    <RenderRegistrySources />
                </div>
            </div>
        </div>
    );
}