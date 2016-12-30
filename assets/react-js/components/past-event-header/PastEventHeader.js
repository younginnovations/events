import React from 'react';

const pastEventScroll = () => {
    $(function () {
        $(".arrow-past-wrap").click(function() {
            $(".past-event-header").animate(
                {
                    top: "40"
                }, 1000);
        });
    });
} ;

class PastEventHeader extends React.Component{
    componentDidMount() {
        pastEventScroll();
    }

    render(){
        return(
            <div className="past-event-header">
                <div className="past-event-header__inner">
                    <a className="arrow-past-wrap" href="#past-section">
                        <span className="icon">Past events</span>
                    </a>
                </div>
            </div>
        )
    }
}
export default PastEventHeader;