import React, {Component} from "react";

class Logo extends Component {

    onClick()    {
        $('body').removeClass('sticky-header');
        $('.section-banner').removeClass('active');
        var target = $('.main-wrapper');
        $('html,body').animate({
            scrollTop: target.offset().top
        }, 500);
    }

    render() {
        return (
            <div className="logo-block">
                <div>
                    <a href="javascript:void(0)" onClick={this.onClick.bind(this)} className="logo-block__inner">
                        <span>ev<strong>e</strong>nts</span>
                    </a>
                    <p className="logo-block__sub-title">by <span>YoungInnovations</span></p>
                </div>
            </div>
        )
    }
}
;

export default Logo;
