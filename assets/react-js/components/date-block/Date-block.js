import React from "react";

const DateBlock = ({day, month, year}) => {
    if(day && month && year){
        return (
            <div className="date-block">
                <div>
                    <span className="month">{month}</span>
                    <div className="date">
                        <span>{day}</span>
                        <span>{year}</span>
                    </div>
                </div>
            </div>
        )
    }
    return null
};

export default DateBlock;
