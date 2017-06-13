import React from 'react';

class PastEventImage extends React.Component{
    render(){

        console.log(this.props.event);

        const imagePath = "https://storage.googleapis.com/yipl-site/events/";

        return(
            <div className="past-event__image">
                <picture>
                    <img src={ imagePath + this.props.event.Image} alt={this.props.event.Image}/>
                </picture>
            </div>
        )
    }
}
export default PastEventImage;