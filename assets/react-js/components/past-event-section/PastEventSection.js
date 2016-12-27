import React from 'react';
import PastEventList from '../past-event-list/PastEventList';
import groupBy from "lodash/fp/groupBy";
import toArray from "lodash/fp/toArray";

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

// import React from 'react';
// import PastEventList from '../past-event-list/PastEventList';
// // import groupBy from "lodash/fp/groupBy";
// // import toArray from "lodash/fp/toArray";
//
// class PastEventSection extends React.Component{
//     // pastEventLists(){
//     //     console.log(this.props.events);
//     //     let any = event => event.StartYear;
//     //     return groupBy(this.props.events, any);
//     // }
//
//     render(){
//         // console.log(this.pastEventLists());
//         return(
//             <section className="past-event section">
//                 {/*{this.pastEventLists().map((events, year) => {*/}
//                 {/*return <PastEventList events={events} year={year} key={year} />*/}
//                 {/*})}*/}
//                 <PastEventList />
//             </section>
//         )
//     }
// }
// export default PastEventSection;