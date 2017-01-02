import React from "react";
import DateBlock from "../date-block/Date-block";
import {HideElementWithEmptyData} from "../../utils/helpers"

const Event = ({event}) => {
    return (
        <figure className="carousel-item-list">
            <div>
                <img src={event.ImageSrc}/>
            </div>
            <figcaption className="container">
                <div className="container__inner">
                    <h1>{event.Title}</h1>
                    <div className="date-block-wrap">
                        <DateBlock day={event.StartDay} month={event.StartMonth} year={event.StartYear}/>
                        <DateBlock day={event.EndDay} month={event.EndMonth} year={event.EndYear}/>
                        <p className={"text text-light " + HideElementWithEmptyData(event.Venue)}>Venue: {event.Venue}</p>
                        <div className={"ghost-button " + HideElementWithEmptyData(event.WebsiteLink)}>
                            <a href={event.WebsiteLink} className="button button-border">View event in detail</a>
                        </div>
                    </div>
                </div>
            </figcaption>
        </figure>
    );
};

export default Event;
