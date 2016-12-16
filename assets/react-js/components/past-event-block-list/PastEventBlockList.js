import React from 'react';
import PastEventImage from '../past-event-image/PastEventImage';
import PastEventSummary from '../past-event-summary/PastEventSummary';

class PastEventBlockList extends React.Component {
    render() {
        return (
            <div className="past-event__blocklist">
                <PastEventImage />
                <PastEventSummary />
            </div>
        )
    }
}
export default PastEventBlockList;