import React from 'react';
import PastEventBlockList from '../past-event-block-list/PastEventBlockList';

class PastEventBlock extends React.Component {
    render() {
        return (
            <div className="past-event__block">
                <PastEventBlockList />
                <PastEventBlockList />
                <PastEventBlockList />
                <PastEventBlockList />
                <PastEventBlockList />
                <PastEventBlockList />
            </div>
        )
    }
}
export default PastEventBlock;