import React from "react";

class Year extends React.Component {
    render() {
        return (
            <div className="past-event__year">
                {this.props.year}
            </div>
        )
    }
}
export default Year;