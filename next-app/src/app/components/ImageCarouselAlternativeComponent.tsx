import { ReactElement } from "react";
import { Link } from 'react-router-dom';
import eventsAndTrainingsImg from '../assets/images/eventsAndTrainingsIndexImage.png';
import dataSourcesImg from '../assets/images/dataSourcesIndexImage.png';
import hedestamImg from '../assets/images/hedestamIndexImage.png';

export default function ImageCarouselAlternativeComponent(): ReactElement {
    return (
        <div>
        <div className="carousel w-full pt-12">
            <Link to="datasources" className="px-0.5">
            <div id="data-sources" className="carousel-item w-full">
                <img src={dataSourcesImg.src} className="w-full" alt="Data Sources represented by different lines in a vortex" />
            </div>
            </Link>
            <Link to="datasources" className="px-0.5">
            <div id="to-do" className="carousel-item w-full">
                <img src={hedestamImg.src} className="w-full" alt="Human T and B-cell receptor sequences represented by a cell membrane on a red and blue color spectrum"/>
            </div>
            </Link>
            <Link to="eventsandtrainings" className="px-0.5">
            <div id="events-and-trainings" className="carousel-item w-full">
                <img src={eventsAndTrainingsImg.src} className="w-full" alt="A woman standing on a stage and speaking with a microphone"/>
            </div>
            </Link>
        </div>
        </div>
    );
}