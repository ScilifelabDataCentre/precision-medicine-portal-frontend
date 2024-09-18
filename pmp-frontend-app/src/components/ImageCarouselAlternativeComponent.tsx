import { ReactElement } from "react";
import { Link } from 'react-router-dom';
import dataSourcesImg from '../assets/images/DataSourcesIndexImage.png';
import hedestamImg from '../assets/images/HedestamIndexImage.png';
import eventsAndTrainingsImg from '../assets/images/EventsTrainingImage.png';

export default function ImageCarouselAlternativeComponent(): ReactElement {
    return (
        <div className="w-full space-y-12">
            {/* Card Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8"> {/* Add mt-8 or your preferred value */}
                {/* KIARVA Card */}
                <Link to="datasources" className="card shadow-lg cursor-pointer">
                    <div className="relative">
                        <img src={hedestamImg} alt="KIARVA" className="h-80 w-full object-cover rounded-t-xl" />
                        <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-75 p-4 rounded-b-xl flex flex-col justify-center">
                            <h1 className="text-white font-bold leading-none">KIARVA</h1>
                            <p className="text-white text-sm">Karolinska Institutet Adaptive Immune Receptor Gene Variant Atlas</p>
                        </div>
                    </div>
                </Link>

                {/* Data Sources Card */}
                <Link to="datasources" className="card shadow-lg cursor-pointer">
                    <div className="relative">
                        <img src={dataSourcesImg} alt="Data Sources" className="h-80 w-full object-cover rounded-t-xl" />
                        <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-75 p-4 rounded-b-xl flex flex-col justify-center">
                            <h1 className="text-white font-bold leading-none">Data sources</h1>
                            <p className="text-white text-sm">Data sources in precision medicine</p>
                        </div>
                    </div>
                </Link>

                {/* Events and Training Card */}
                <Link to="eventsandtrainings" className="card shadow-lg cursor-pointer">
                    <div className="relative">
                        <img src={eventsAndTrainingsImg} alt="Events and Training" className="h-80 w-full object-cover rounded-t-xl" />
                        <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-75 p-4 rounded-b-xl flex flex-col justify-center">
                            <h1 className="text-white font-bold leading-none">Events and training</h1>
                            <p className="text-white text-sm">Stay updated with the latest events and training opportunities.</p>
                        </div>
                    </div>
                </Link>
            </div>

            {/* How to Access Clinical Data and RAGnar Introduction Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* How to Access Clinical Data Card */}
                <Link to="accessclinicaldata" className="card shadow-lg cursor-pointer bg-base-100 text-black rounded-xl flex flex-col justify-center items-center text-center">
                    <div className="card-body flex flex-col justify-center items-center text-center h-full p-6">
                        <h1 className="text-lg font-bold">How to access clinical data in Sweden</h1>
                        <p className="text-sm">Human data for research can be accessed from various sources such as medical records, quality registries, and research databases.</p>
                    </div>
                </Link>

                {/* RAGnar Introduction Section */}
                <div className="card shadow-lg bg-base-100 text-black rounded-xl flex flex-col justify-center items-center text-center p-8">
                    <h1 className="text-lg font-bold mb-4">Introducing RAGnar</h1>
                    <p className="text-sm">
                        Meet RAGnar!
                    </p>
                </div>
            </div>

            {/* News Section with Dates and Multiple Items */}
            <div>
                <h1 className="text-2xl font-bold text-center">What's new</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* News Item 1 */}
                    <div className="card shadow-lg bg-white text-black rounded-xl p-4">
                        <p className="text-xs text-gray-500">2024-08-20</p>
                        <h2 className="text-lg font-bold">Precision medicine portal official launch</h2>
                        <p className="text-sm">We are finally live!</p>
                    </div>
                    {/* News Item 2 */}
                    <div className="card shadow-lg bg-white text-black rounded-xl p-4">
                        <p className="text-xs text-gray-500">2024-08-15</p>
                        <h2 className="text-lg font-bold">KIARVA</h2>
                        <p className="text-sm">We are excited to introduce KIARVA, Karolinska Institutet Adaptive Immune Receptor Gene Variant Atlas, a resource by Hedestam's research group at Karolinska Institutet</p>
                    </div>
                    {/* News Item 3 */}
                    <div className="card shadow-lg bg-white text-black rounded-xl p-4">
                        <p className="text-xs text-gray-500">2024-08-10</p>
                        <h2 className="text-lg font-bold">New resource - clinical registries</h2>
                        <p className="text-sm">Explore the Swedish quality registries</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
