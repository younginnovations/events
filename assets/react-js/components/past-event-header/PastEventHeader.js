import React from 'react';

const pastEventScroll = () => {
    $(function () {
        $(".arrow-past-wrap").click(function() {
            $(".past-event-header").animate(
                {
                    top: "40"
                }, 1000);
        });

        var sectionSliderTop = $(".section-slider").offset().top;
        $(window).on('scroll',function() {
            if ($(window).scrollTop() < sectionSliderTop) {
                // $(".past-event-header").animate(
                //     {
                //         top: "auto"
                //     }, 1000);
                $(".past-event-header").css("top", "auto");
                $(".section-banner").removeClass('active');
            }
            else {
                // $(".past-event-header").animate(
                //     {
                //         top: "40"
                //     }, 1000);
                $(".past-event-header").css("top", "40px");
                $(".section-banner").addClass('active');
            }
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