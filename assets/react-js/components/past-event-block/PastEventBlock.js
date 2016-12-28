import React from 'react';
import PastEventBlockList from '../past-event-block-list/PastEventBlockList';

class PastEventBlock extends React.Component {
    render() {
        return (
            <div className="past-event__block">
                {this.props.events.map(event => {
                    return <PastEventBlockList event={event} key={event.SN}/>
                })}
            </div>
        )
    }
}
export default PastEventBlock;