import React from "react";
import {Carousel} from "react-responsive-carousel";
import Event from "./Event";

class SliderEvent extends React.Component {
    showCarousel() {
        if (this.props.events.length) {
            return (
                <Carousel showThumbs={false} showArrows={true} showStatus={false}>
                    {this.props.events.map(event => <Event key={event.SN} event={event}/>)}
                </Carousel>
            )
        }
    }

    render() {
        return (
            <section className="section section-slider" id="content">
                <p>There is no Upcoming Event</p>
                {this.showCarousel()}
            </section>
        )
    }
}
export default SliderEvent;



