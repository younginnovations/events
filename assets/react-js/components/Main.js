import React from 'react';
import Header from './header/Header';
import PastEventHeader from './past-event-header/PastEventHeader';
import SliderEvent from './slider-event/Slider-event';

class Main extends React.Component{
    render(){
        return(
          <div className="main-wrapper__inner">
              <Header />
              <PastEventHeader />
              <SliderEvent />
          </div>
        )
    }
}
export default Main;