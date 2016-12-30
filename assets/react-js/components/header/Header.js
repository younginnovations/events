import React from 'react';
import Logo from '../logo/Logo';
import BannerArrow from '../banner-arrow/Banner-arrow';

const stickyHeader = () => {
    $(function(){
        $(window).scroll(function(){
            var winTop = $(window).scrollTop();
            if(winTop >= 100){
                $("body").addClass("sticky-header");
            }else{
                $("body").removeClass("sticky-header");
            }//if-else
        });//win func.
    });//ready func.
};

class Header extends React.Component{
    componentDidMount() {
        stickyHeader();
    }
    render(){
        return(
            <section className="section-banner section">
                <Logo />
                <BannerArrow/>
            </section>
        )
    }
}
export default Header;