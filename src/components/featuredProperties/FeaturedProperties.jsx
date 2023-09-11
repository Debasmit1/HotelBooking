import React from 'react'
import "./featuredProperties.css";

const FeaturedProperties = () => {
    return (
        <div className='fp'>
            <div className="fpItem">
                <img src="https://img.traveltriangle.com/blog/wp-content/uploads/2019/04/Hostels-In-Himachal-Pradesh-cover.jpg" alt="" className="fpImg" />
                <span className="fpName">Back In Time Hostel </span>
                <span className='fpCity'>Hampta</span>
                <span className="fpPrice">Starting from Rs 699</span>
                <div className="fpRating">
                    <button>4.1</button>
                    <span>Picturesque</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="https://worldinparis.com/wp-content/uploads/2019/05/Ritz-Hotel-Paris.jpg" alt="" className="fpImg" />
                <span className="fpName">Ritz </span>
                <span className='fpCity'>Paris</span>
                <span className="fpPrice">Starting from Rs. 17999</span>
                <div className="fpRating">
                    <button>4.2</button>
                    <span>Prestigious</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/b2/1f/ab/hotel-exterior.jpg?w=1100&h=-1&s=1" alt="" className="fpImg" />
                <span className="fpName">Clarion Hotel Trondheim </span>
                <span className='fpCity'>Trondheim</span>
                <span className="fpPrice">Starting from Rs. 9899</span>
                <div className="fpRating">
                    <button>4.2</button>
                    <span>Wonderful</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="https://www.itchotels.com/content/dam/itchotels/in/umbrella/itc/hotels/itcroyalbengal-kolkata/images/overview-landing-page/headmast/desktop/ITC-Royal-Bengal.png" alt="" className="fpImg" />
                <span className="fpName">ITC Royal Bengal </span>
                <span className='fpCity'>Kolkata</span>
                <span className="fpPrice">Starting from Rs. 11999</span>
                <div className="fpRating">
                    <button>4.5</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperties