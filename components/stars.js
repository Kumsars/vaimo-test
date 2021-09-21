import * as React from 'react';

const stars = (reviews) => {

        console.log("reviews",reviews)

        return (
                <div className="ratings">
                        <div className="rating-box">
                                <span className="star on">&#9733;</span>
                                <span className="star on">&#9733;</span>
                                <span className="star on">&#9733;</span> 
                                <span className="star half">&#9733;</span>  
                                <span className="star">&#9733;</span> 
                        </div>
                        <span className="item" style={{color:"#FF6600", paddingTop:"7px"}}> {reviews && reviews.count && reviews.count.rating ? reviews.count.rating : null}</span>
                        <span className="item" style={{paddingTop:"7px", color:"#999999"}}>{reviews && reviews.count && reviews.count.count ? reviews.count.count : null} reviews</span>
                        <span className="item" style={{paddingTop:"7px"}}>{reviews && reviews.count && reviews.count.total_buyers ? reviews.count.total_buyers : null} buyers</span>
                </div>
        );
       
    
} 
export default stars;