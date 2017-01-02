import React from "react";
import {HideElementWithEmptyData} from "../../utils/helpers";

class PastEventInfo extends React.Component {

    render() {
            return (
                <div className="past-event__info">
                    <h2>{this.props.event.Title}</h2>
                    <p className={"text " + HideElementWithEmptyData(this.props.event.Venue)}>Venue: {this.props.event.Venue}</p>
                    <div className={"ghost-button " + HideElementWithEmptyData(this.props.event.WebsiteLink)}>
                        <a href={this.props.event.WebsiteLink} className="button button-border">View event in detail</a>
                    </div>
                </div>
            )
    }
}
export default PastEventInfo;

