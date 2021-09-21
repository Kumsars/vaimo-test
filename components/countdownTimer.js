import * as React from 'react';

const countdownTimer = (props) => {

  
    return(
        <div className="countdown-timer">
            <span className="percentage">
                {props && props.data && props.data.amount ? props.data.amount : null} OFF
            </span>
            <span> Discount ends in</span>
            <span className="ends-in">
                <span className="icon"></span>
                <span>{props && props.data && props.data.end_date ? props.data.end_date : null} </span>
              
            </span>
        </div>
    );
}
export default countdownTimer;