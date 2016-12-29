import React from "react";
import PastEventList from "../past-event-list/PastEventList";
import groupBy from "lodash/groupBy";
import map from "lodash/map";

class PastEventSection extends React.Component {
    groupEventsByYear() {
        return groupBy(this.props.events, event => event.StartYear);
    }

    pastEventLists() {
        return map(this.groupEventsByYear(), (events, year) => {
            return <PastEventList events={events} year={year} key={year}/>
        });
    }

    render() {
        return (
            <section className="past-event section" id="past-section">
                {this.pastEventLists()};
            </section>
        )
    }
}
export default PastEventSection;