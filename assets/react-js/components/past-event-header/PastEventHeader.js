import React from 'react';

const pastEventScroll = () => {
    $(function () {
        // $(".arrow-past-wrap").click(function() {
        //     $(".past-event-header").animate(
        //         {
        //             top: "40"
        //         }, 1000).queue(function(){
        //         $(".section-banner").addClass('active');
        //
        //     });
        // });

        var sectionSliderTop = $(".section-slider").position().top;

        $(window).on('scroll',function() {
            if ($(window).scrollTop() < sectionSliderTop) {
                // $(".past-event-header").stop().animate(
                //         {
                //             top: "auto"
                //         }, 1000);
                $(".past-event-header").stop();
                $(".section-banner").removeClass('active');
            }
            else {
                // $(".past-event-header").stop().animate(
                //     {
                //         top: "40"
                //     }, 1000);
                $(".past-event-header").stop();
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