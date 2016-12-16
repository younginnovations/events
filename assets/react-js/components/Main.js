import React from 'react';
import Header from './header/Header';
import PastEventHeader from './past-event-header/PastEventHeader';
import SliderEvent from './slider-event/Slider-event';
import PastEventSection from './past-event-section/PastEventSection';
import FixedGradient from './fixed-gradient/FixedGradient';

class Main extends React.Component{
    render(){
        return(
          <div className="main-wrapper__inner">
              <Header />
              <PastEventHeader />
              <SliderEvent />
              <PastEventSection />
              <FixedGradient />
          </div>
        )
    }
}
export default Main;