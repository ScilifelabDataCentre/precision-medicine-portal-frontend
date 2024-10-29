'use client';

import { ReactElement } from "react";
import Link from 'next/link';

// Image paths
const dataSourcesImg = '/HomePageImages/dataSourcesIndexImage.png';
const hedestamImg = '/HomePageImages/hedestamIndexImage.png';
const registriesImage = '/HomePageImages/RegistriesImage.jpg';

// Colors for styling consistency
const primaryColor = "#4F5D75"; // Dark text color
const backgroundColor = "#F7F7FF"; // Light background color
const cardBackgroundColor = "#FFFFFF"; // White card background
//const accentColor = "#EF8354"; // Accent color for hover
const betaBadgeColor = "#D3E4A3"; // Light green for "Beta coming soon" badge

export default function ImageCarouselAlternativeComponent(): ReactElement {
    return (
        <div className="w-full space-y-16 py-12" style={{ backgroundColor }}>
            {/* Main Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-0">
                
                {/* Data Sources Card */}
                <Link href="datasources" className="block rounded-xl shadow-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl" style={{ backgroundColor: cardBackgroundColor }}>
                    <div className="relative overflow-hidden rounded-t-xl">
                        <img src={dataSourcesImg} alt="Data Sources" className="h-64 w-full object-cover" />
                        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black to-transparent">
                            <h1 className="text-white font-bold">Data Sources</h1>
                            <p className="text-white text-sm">Repositories and data sources in life science</p>
                        </div>
                    </div>
                </Link>

                {/* Registries Card */}
                <Link href="registries" className="block rounded-xl shadow-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl" style={{ backgroundColor: cardBackgroundColor }}>
                    <div className="relative overflow-hidden rounded-t-xl">
                        <img src={registriesImage} alt="Quality Registers" className="h-64 w-full object-cover" />
                        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black to-transparent">
                            <h1 className="text-white font-bold">Quality Registers</h1>
                            <p className="text-white text-sm">A comprehensive list of quality registers in Sweden</p>
                        </div>
                    </div>
                </Link>

                {/* KIARVA Card */}
                <Link href="kiarva" className="block rounded-xl shadow-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl" style={{ backgroundColor: cardBackgroundColor }}>
                    <div className="relative overflow-hidden rounded-t-xl">
                        <img src={hedestamImg} alt="KIARVA" className="h-64 w-full object-cover" />
                        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black to-transparent">
                            <h1 className="text-white font-bold">KIARVA</h1>
                            <p className="text-white text-sm">KI Adaptive Immune Receptor Gene Variant Atlas</p>
                        </div>
                    </div>
                </Link>
            </div>

            {/* Additional Information Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0">
                
                {/* How to Access Clinical Data */}
                <Link href="accessclinicaldata" className="block rounded-xl shadow-lg cursor-pointer p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl" style={{ backgroundColor: cardBackgroundColor }}>
                    <h1 className="text-lg font-bold" style={{ color: primaryColor }}>How to Access Clinical Data</h1>
                    <p className="text-sm text-gray-700">An overview of accessing clinical data in Sweden, including patient and medical records, and quality registers.</p>
                </Link>

                {/* RAGnar Card with "Beta coming soon" Badge */}
                <div className="relative block rounded-xl shadow-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl" style={{ backgroundColor: cardBackgroundColor }}>
                    {/* Beta coming soon Badge */}
                    <span className="absolute top-2 right-2 px-2 py-0.5 text-xs font-medium text-gray-900 rounded-full shadow-sm" style={{ backgroundColor: betaBadgeColor }}>
                        Beta coming soon
                    </span>
                    <h1 className="text-lg font-bold" style={{ color: primaryColor }}>Introducing RAGnar</h1>
                    <p className="text-sm text-gray-700">A retrieval-augmented generation (RAG) AI tool for precision medicine, initially drawing on PubMed papers to answer questions with referenced sources.</p>
                </div>
            </div>

            {/* News Section */}
            <div className="px-4 md:px-0">
                <h1 className="text-xl font-bold text-center mb-4" style={{ color: primaryColor }}>What&apos;s new?</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    {/* News Item 1 */}
                    <div className="block rounded-xl shadow-lg p-5 transition hover:shadow-xl" style={{ backgroundColor: cardBackgroundColor }}>
                        <p className="text-xs text-gray-500">2024-10-03</p>
                        <h2 className="text-md font-semibold mt-2" style={{ color: primaryColor }}>KIARVA</h2>
                        <div className="border-t border-gray-300 my-2"></div>
                        <p className="text-sm mt-1">An adaptive immune receptor gene variant atlas hosting IG heavy chain alleles from 2,485 individuals, in collaboration with Gunilla Karlsson Hedestam&apos;s research group at Karolinska Institutet.</p>
                    </div>
                    
                    {/* News Item 2 */}
                    <div className="block rounded-xl shadow-lg p-5 transition hover:shadow-xl" style={{ backgroundColor: cardBackgroundColor }}>
                        <p className="text-xs text-gray-500">2024-09-20</p>
                        <h2 className="text-md font-semibold mt-2" style={{ color: primaryColor }}>New resource!</h2>
                        <div className="border-t border-gray-300 my-2"></div>
                        <p className="text-sm mt-1">Explore Swedish quality registers, filterable by organisation, category, or keywords. These registers support continuous healthcare improvement and serve as key resources for development and research.</p>
                    </div>

                    {/* News Item 3 */}
                    <div className="block rounded-xl shadow-lg p-5 transition hover:shadow-xl" style={{ backgroundColor: cardBackgroundColor }}>
                        <p className="text-xs text-gray-500">2024-09-20</p>
                        <h2 className="text-md font-semibold mt-2" style={{ color: primaryColor }}>Precision Medicine Portal soft launch</h2>
                        <div className="border-t border-gray-300 my-2"></div>
                        <p className="text-sm mt-1">Developed by the Data Science Node in Precision Medicine and Diagnostics and operated by the SciLifeLab Data Centre.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
