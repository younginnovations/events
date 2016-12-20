import React, {Component} from "react";

const arrowScroll = () => {
    //Code stolen from css-tricks for smooth scrolling:
    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
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
                    <p>upcoming events</p>
                </div>
                <div className="arrow bounce">
                    <a className="arrow-wrap" href="#content">
                        <span className="arrow"></span>
                    </a>
                </div>
            </div>
        )
    }
}
export default BannerArrow;