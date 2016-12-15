import React from "react";
import {Carousel} from "react-responsive-carousel";
import DateBlock from "../date-block/Date-block";

class SliderEvent extends React.Component {
    render() {
        return (
            <section className="section-slider" id="content">
                <Carousel showThumbs={false} showArrows={true} showStatus={false}>
                    <figure className="carousel-item-list">
                        <div>
                            <img src="http://younginnovations.com.np/images/impact/impact-img-4.png"/>
                        </div>
                        <figcaption className="container">
                            <div className="container__inner">
                                <h1>Open data day 2017</h1>
                                <div className="date-block-wrap">
                                    <DateBlock/>
                                    <DateBlock/>
                                    <p className="text">Other details yet to be decided</p>
                                    <div className="ghost-button">
                                        <button className="button button-border">View event in detail</button>
                                    </div>
                                </div>
                            </div>
                        </figcaption>
                    </figure>

                    <figure className="carousel-item-list">
                        <div>
                            <img src="http://younginnovations.com.np/images/impact/impact-img-2.png"/>
                        </div>
                        <figcaption className="container">
                            <div className="container__inner">
                                <h1>Open data day 2017</h1>
                                <DateBlock/>
                                <p className="text">Venue: Kathmandu College of Mangement, Lalitpur</p>
                                <div className="ghost-button">
                                    <a href="#" className="button button-border">View event in detail</a>
                                </div>
                            </div>
                        </figcaption>
                    </figure>


                </Carousel>
            </section>
        )
    }
}
export default SliderEvent;



