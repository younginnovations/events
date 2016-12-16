import React from 'react';
import Year from '../year/Year';
import PastEventBlock from '../past-event-block/PastEventBlock';

class PastEventList extends React.Component{
    render(){
        return(
            <div className="past-event__list">
                <Year />
                <PastEventBlock />
            </div>
        )
    }
}
export default PastEventList;