import React from 'react'
import "./featured.css";

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/Samuel_Beckett_Bridge_At_Sunset_Dublin_Ireland_%2897037639%29_%28cropped%29.jpeg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Dublin</h1>
                    <h2>123 Properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://digital.ihg.com/is/image/ihg/holiday-inn-austin-3471200838-4x3" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Austin</h1>
                    <h2>532 Properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://www.telegraph.co.uk/content/dam/Travel/hotels/north-america/hawaii/ritz-carlton-kapalua-hawaii-united-states-p.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Hawaii</h1>
                    <h2>533 Properties</h2>
                </div>
            </div>
        </div>
    )
}

export default Featured