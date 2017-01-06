import React, {Component} from "react";

const arrowScroll = () => {
    //From css-tricks for smooth scrolling:
    $(function () {
        $('a.arrow-wrap[href*=#]:not([href=#]),a.arrow-past-wrap[href*=#]:not([href=#])').on('click',function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash),
                    headerHeight = $('.section-banner').height() - 15;
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - headerHeight
                    }, 500);
                    return false;
                }
            }
        });
    });
};

class BannerArrow extends Component {
    componentDidMount() {
        arrowScroll();
    }

    render() {
        return (
            <div className="banner-arrow-block">
                <div className="banner-arrow-block__inner">
                    <div className="arrow-block">
                        <a className="arrow-wrap" href="#content">
                            <p>upcoming events</p>
                            <span className="arrow-icon"></span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
export default BannerArrow;