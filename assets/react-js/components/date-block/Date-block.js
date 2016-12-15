import React from 'react';

class DateBlock extends React.Component{
    render(){
        return(
            <div className="date-block">
                <div>
                    <span className="month">March</span>
                    <div className="date">
                        <span>04</span>
                        <span>2017</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default DateBlock;