import React from 'react';

const pastEventScroll = () => {
    $(function () {

        function SlideTop() {
            var sectionSliderTop = $(".section-slider").position().top + 20;
            $(window).on('scroll', function () {
                if ($(window).scrollTop() < sectionSliderTop) {
                    $(".past-event-header").stop();
                    $(".section-banner").removeClass('active');
                }
                else {
                    $(".past-event-header").stop();
                    $(".section-banner").addClass('active');
                }
            });
        }

        SlideTop();

        $(window).resize(function () {
            SlideTop();
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