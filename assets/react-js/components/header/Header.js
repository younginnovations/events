import React from 'react';
import Logo from '../logo/Logo';
import BannerArrow from '../banner-arrow/Banner-arrow';

class Header extends React.Component{
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