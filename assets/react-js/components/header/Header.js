import React from 'react';
import Logo from '../logo/Logo';
import BannerArrow from '../banner-arrow/Banner-arrow';
import {Loader} from '../../utils/helpers'
import PastEventHeader from '../past-event-header/PastEventHeader';

const stickyHeader = () => {
    $(function(){
        $(window).on('scroll',function(){
            if( $(window).scrollTop() > 0) {
                $("body").addClass("sticky-header");
            } else {
                $("body").removeClass("sticky-header");
            }
        });
    });//ready func.
};

class Header extends React.Component{
    componentDidMount() {
        stickyHeader();
        Loader.show('#main-loader');
    }
    render(){
        return(
            <section className="section-banner section">
                <div id="main-loader"></div>
                <Logo />
                <BannerArrow/>
                <PastEventHeader/>
            </section>
        )
    }
}
export default Header;