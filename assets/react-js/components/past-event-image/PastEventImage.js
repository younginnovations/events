import React from 'react';

class PastEventImage extends React.Component{
    render(){
        return(
            <div className="past-event__image">
                <picture>
                    <img src={this.props.event.ImageSrc} alt="Event Image"/>
                </picture>
            </div>
        )
    }
}
export default PastEventImage;