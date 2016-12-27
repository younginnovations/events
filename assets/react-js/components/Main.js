import React from "react";
import Header from "./header/Header";
import PastEventHeader from "./past-event-header/PastEventHeader";
import SliderEvent from "./slider-event/Slider-event";
import PastEventSection from "./past-event-section/PastEventSection";
import FixedGradient from "./fixed-gradient/FixedGradient";
import moment from "moment";

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {events: []};
    }

    componentWillMount() {
            this.initDataFromSpreadsheet();
    }

    initDataFromSpreadsheet() {
        var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1hsq2GxF1RJu-PVHLU4hIkt-Kso0jHpWaT99WGXE92m0/pubhtml';

        Tabletop.init({
            key: public_spreadsheet_url,
            callback: events => this.setState({events}),
            simpleSheet: true
        });
    }

    upcomingEvents(){
        return this.state.events.filter(event => {
           return moment(`${event.StartYear}-${event.StartMonth}-${event.StartDay}`, 'YYYY-MMM-D').format('Y-M-D') >= moment().format('Y-M-D');
        });
    }

    pastEvents(){
        return this.state.events.filter(event => {
            return moment(`${event.StartYear}-${event.StartMonth}-${event.StartDay}`, 'YYYY-MMM-D').format('Y-M-D') < moment().format('Y-M-D');
        });
    }

    render() {
        return (
            <div className="main-wrapper__inner">
                <Header />
                <PastEventHeader />
                <SliderEvent events={this.upcomingEvents()}/>
                <PastEventSection events={this.pastEvents()}/>
                <FixedGradient />
            </div>
        )
    }
}
export default Main;