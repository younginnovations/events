import React from 'react';

class PastEventImage extends React.Component{
    render(){
        return(
            <div className="past-event__image">
                <picture>
                    <img src="../img/event-img-1.jpg" alt="Event"/>
                </picture>
            </div>
        )
    }
}
export default PastEventImage;