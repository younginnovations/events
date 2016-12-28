import React from 'react';

class PastEventInfo extends React.Component{
    render(){
        return(
            <div className="past-event__info">
                <h2>{this.props.event.Title}</h2>
                <p className="text">Venue: {this.props.event.Venue}</p>
                <div className="ghost-button">
                    <a href={this.props.event.WebsiteLink} className="button button-border">View event in detail</a>
                </div>
            </div>
        )
    }
}
export default PastEventInfo;

