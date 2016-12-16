import React from 'react';
import DateBlock from '../date-block/Date-block';
import PastEventInfo from '../past-event-info/PastEventInfo';

class PastEventSummary extends React.Component{
    render(){
        return(
            <div className="past-event__summary">
                <DateBlock/>
                <PastEventInfo />
            </div>
        )
    }
}
export default PastEventSummary;