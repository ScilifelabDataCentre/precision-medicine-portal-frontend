import { ReactElement, useState, useEffect } from "react";
import registryData from "../assets/Kvalitetsregister_geo_dates_02.09.2024.json"; // Update to your JSON file path
import { RegistrySources, RegistrySourcesFilters } from "../interfaces/types";

export default function RegistryComponent(): ReactElement {
    const [RegistrySourcesJSON, setRegistrySourcesJSON] = useState<RegistrySources[]>([]);
    const [selectedFilters, setSelectedFilters] = useState<RegistrySourcesFilters>({
        registryCentre: [],
        registryCategory: [],
    });
    const [searchBar, setSearchBar] = useState<string>("");

    const filters: RegistrySourcesFilters = {
        registryCentre: [
            "Kvalitetsregistercentrum Stockholm",
            "Registercentrum Syd",
            "Registercentrum Norr",
            "Uppsala Clinical Research Center",
            "Registercentrum Västra Götaland",
            "Registercentrum Sydost",
            "RCC Stockholm Gotland",
            "RCC Sydöst",
            "RCC Norr",
            "RCC Mellansverige",
            "RCC Väst",
            "RCC Syd",
        ],
        registryCategory: [
            "National quality registry",
            "Other quality registry",
            "National cancer quality registry",
        ],
    };

    const organisationLinks: { [key: string]: string } = {
        "Kvalitetsregistercentrum Stockholm": "https://qrcstockholm.se",
        "Registercentrum Syd": "https://registercentrum.se",
        "Registercentrum Norr": "https://rcnorr.se",
        "Uppsala Clinical Research Center": "https://www.ucr.uu.se/sv/",
        "Registercentrum Västra Götaland": "https://registercentrum.se",
        "Registercentrum Sydost": "https://sydostrasjukvardsregionen.se/samverkansgrupper/data-och-analys/registercentrum-sydost/",
        "RCC Stockholm Gotland": "https://cancercentrum.se/stockholm-gotland/",
        "RCC Sydöst": "https://cancercentrum.se/sydost/",
        "RCC Norr": "https://cancercentrum.se/norr/",
        "RCC Mellansverige": "https://cancercentrum.se/mellansverige/",
        "RCC Väst": "https://cancercentrum.se/vast/",
        "RCC Syd": "https://cancercentrum.se/syd/",
    };

    const [checkedList, setCheckedList] = useState<boolean[]>(Array(filters.registryCentre.length + filters.registryCategory.length).fill(false));

    useEffect(() => {
        const updatedRegistryData = registryData.map(entry => ({
            ...entry,
            start_date: entry.start_date ? entry.start_date.split("-")[0] : '',
            category: entry.category || []
        }));
        setRegistrySourcesJSON(updatedRegistryData);
    }, []);

    const handleFilterChange = (type: keyof RegistrySourcesFilters, value: string, index: number) => {
        setSelectedFilters(prev => {
            const updated = { ...prev };
            updated[type] = updated[type].includes(value)
                ? updated[type].filter(item => item !== value)
                : [...updated[type], value];
            return updated;
        });
        setCheckedList(prev => prev.map((item, idx) => idx === index ? !item : item));
    };

    const applyFilters = (data: RegistrySources) => {
        const matchesCentre = !selectedFilters.registryCentre.length || selectedFilters.registryCentre.some(filter =>
            data.registry_centre.some(centre => centre.toLowerCase() === filter.toLowerCase())
        );
        const matchesCategory = !selectedFilters.registryCategory.length || selectedFilters.registryCategory.some(filter =>
            data.category.some(cat => cat.toLowerCase() === filter.toLowerCase())
        );
        const matchesSearch = searchBar.toLowerCase().split(" ").every(tag =>
            data.name.toLowerCase().includes(tag) || data.search_tags.some(st => st.toLowerCase().includes(tag))
        );
        return matchesCentre && matchesCategory && matchesSearch;
    };

    return (
        <div className="container mx-auto p-4 pt-16">
            <div className="flex flex-col lg:flex-row gap-16">
                {/* Left Column */}
                <div className="space-y-6 w-full lg:w-1/4">
                    <div>
                        <label className="font-bold text-xl block mb-2">Search</label>
                        <input
                            type="text"
                            placeholder="Name/Keywords"
                            className="input bg-neutral input-bordered border-neutral rounded-[10px] w-full"
                            value={searchBar}
                            onChange={e => setSearchBar(e.target.value)}
                        />
                    </div>
                    <div>
                        <h2 className="font-bold text-xl block mb-2">Organisation</h2>
                        <div className="form-control w-full rounded-[10px] shadow border-2 border-neutral p-3">
                            {filters.registryCentre.map((centre, idx) => (
                                <div key={centre} className="flex flex-row">
                                    <label className="label cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="checkbox border-gray-300 [--chkbg:theme(colors.primary)] [--chkfg:white]"
                                            onChange={() => handleFilterChange("registryCentre", centre, idx)}
                                            checked={checkedList[idx]}
                                        />
                                    </label>
                                    <span className="label-text text-neutral-content pt-2.5 pl-2">{centre}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2 className="font-bold text-xl block mb-2">Category</h2>
                        <div className="form-control w-full rounded-[10px] shadow border-2 border-neutral p-3">
                            {filters.registryCategory.map((category, idx) => (
                                <div key={category} className="flex flex-row">
                                    <label className="label cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="checkbox border-gray-300 [--chkbg:theme(colors.primary)] [--chkfg:white]"
                                            onChange={() => handleFilterChange("registryCategory", category, filters.registryCentre.length + idx)}
                                            checked={checkedList[filters.registryCentre.length + idx]}
                                        />
                                    </label>
                                    <span className="label-text text-neutral-content pt-2.5 pl-2">{category}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="form-control rounded-[10px] shadow border-2 border-neutral bg-neutral p-2 mt-8">
                        <div className="flex items-center mb-1">
                            <div className="mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4 text-neutral-content">
                                    <g data-name="26.Information">
                                        <path d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2z"/>
                                        <path d="M15 19h-4v-8H9V9h4v8h2v2zM11 5h2v2h-2z"/>
                                    </g>
                                </svg>
                            </div>
                            <span className="font-bold text-neutral-content">Please note:</span>
                        </div>
                        <div className="text-justify text-black text-sm">
                            <p>
                                The collected data in most of the registries is only available in Swedish.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
<div className="w-full lg:w-3/4">
    <div className="flex flex-col space-y-6 col-span-2">
        {RegistrySourcesJSON.filter(applyFilters).map((item, index) => (
            <div
                key={index}
                className={`form-control rounded-[10px] shadow border-2 border-neutral ${index !== 0 ? 'mb-6' : ''}`}
            >
                <div className="bg-neutral p-3 flow-root rounded-t-[8px] pr-4">
                    <a href={item.url.startsWith('http') ? item.url : ''} target="_blank" rel="noopener noreferrer" className="text-neutral-content text-xl">
                        {item.name}
                    </a>
                </div>
                <div className="p-3">
                    <p className="text-black text-justify">{item.Information || "Information not available."}</p>
                    <div className="mt-3 flex flex-row space-x-2">
                        
                        {/* Start Year */}
                        <div className="flex-shrink-0 px-3 py-1 bg-black opacity-80 text-white rounded-lg shadow-sm">
                            <strong className="text-xs block">Start year:</strong>
                            <p className="text-xs leading-tight">{item.start_date}</p>
                        </div>

                        {/* Organisation */}
                        <div className="flex-shrink-0 px-3 py-1 bg-black opacity-80 text-white rounded-lg shadow-sm">
                            <strong className="text-xs block">Organisation:</strong>
                            <a 
                                href={organisationLinks[item.registry_centre[0]].startsWith('http') ? organisationLinks[item.registry_centre[0]] : ''} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-xs block hover:underline"
                                style={{ textDecoration: 'none', cursor: 'pointer', margin: 0, padding: 0 }}
                            >
                                {item.registry_centre.join(", ")}
                            </a>
                        </div>

                        {/* Category */}
                        <div className="flex-shrink-0 px-3 py-1 bg-black opacity-80 text-white rounded-lg shadow-sm">
                            <strong className="text-xs block">Category:</strong>
                            <p className="text-xs leading-tight">{item.category.join(", ")}</p>
                        </div>
                    </div>
                </div>
            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
