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
                <img src={dataSourcesImg} className="w-full" />
            </div>
            </Link>
            <Link to="datasources" className="px-0.5">
            <div id="to-do" className="carousel-item w-full">
                <img src={hedestamImg} className="w-full" />
            </div>
            </Link>
            <Link to="eventsandtrainings" className="px-0.5">
            <div id="events-and-trainings" className="carousel-item w-full">
                <img src={eventsAndTrainingsImg} className="w-full" />
            </div>
            </Link>
        </div>
        </div>
    );
}