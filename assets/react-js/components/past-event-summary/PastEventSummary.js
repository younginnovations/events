import React from 'react';
import DateBlock from '../date-block/Date-block';
import PastEventInfo from '../past-event-info/PastEventInfo';

class PastEventSummary extends React.Component{
    render(){
        return(
            <div className="past-event__summary">
                <DateBlock day={this.props.event.StartDay} month={this.props.event.StartMonth} year={this.props.event.StartYear}/>
                <PastEventInfo event={this.props.event}/>
            </div>
        )
    }
}
export default PastEventSummary;