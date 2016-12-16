import React from 'react';
import PastEventList from '../past-event-list/PastEventList';

class PastEventSection extends React.Component{
    render(){
        return(
            <section className="past-event section">
                <PastEventList />
            </section>
        )
    }
}
export default PastEventSection;