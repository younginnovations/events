import React from 'react';
import PastEventImage from '../past-event-image/PastEventImage';
import PastEventSummary from '../past-event-summary/PastEventSummary';

class PastEventBlock extends React.Component {
    render() {
        return (
            <div className="past-event-block">
                <PastEventImage />
                <PastEventSummary />
            </div>
        )
    }
}
export default PastEventBlock;