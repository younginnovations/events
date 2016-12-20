import React from "react";
import DateBlock from "../date-block/Date-block";

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
                        <p className="text text-light">Venue: {event.Venue}</p>
                        <div className="ghost-button">
                            <button className="button button-border">View event in detail</button>
                        </div>
                    </div>
                </div>
            </figcaption>
        </figure>
    );
};

export default Event;
