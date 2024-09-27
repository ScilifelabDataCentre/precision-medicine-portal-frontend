'use client';

import { ReactElement } from "react";
import Link from 'next/link';

export default function ImageCarouselAlternativeComponent(): ReactElement {
    return (
        <div>
        <div className="carousel w-full pt-12">
            <Link href="datasources" className="px-0.5">
            <div id="data-sources" className="carousel-item w-full">
                <img src={'/HomePageImages/dataSourcesIndexImage.png'} className="w-full" alt="Data Sources represented by different lines in a vortex" />
            </div>
            </Link>
            <Link href="datasources" className="px-0.5">
            <div id="to-do" className="carousel-item w-full">
                <img src={'/HomePageImages/hedestamIndexImage.png'} className="w-full" alt="Human T and B-cell receptor sequences represented by a cell membrane on a red and blue color spectrum"/>
            </div>
            </Link>
            <Link href="eventsandtrainings" className="px-0.5">
            <div id="events-and-trainings" className="carousel-item w-full">
                <img src={'/HomePageImages/eventsAndTrainingsIndexImage.png'} className="w-full" alt="A woman standing on a stage and speaking with a microphone"/>
            </div>
            </Link>
        </div>
        </div>
    );
}