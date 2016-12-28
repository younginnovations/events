import React from 'react';
import PastEventImage from '../past-event-image/PastEventImage';
import PastEventSummary from '../past-event-summary/PastEventSummary';

class PastEventBlockList extends React.Component {
    render() {
        return (
            <div className="past-event__blocklist">
                <PastEventImage event={this.props.event}/>
                <PastEventSummary event={this.props.event} />
            </div>
        )
    }
}
export default PastEventBlockList;