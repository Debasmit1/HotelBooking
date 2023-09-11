import React, { useState } from 'react'
import "./hotel.css";
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer"


const Hotel = () => {

    const [slideNumber, setSliderNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const photos = [
        {
            src: "https://thespaces.com/wp-content/uploads/2016/10/Penthouse-212-fifth-avenue-8-ft.jpg"
        },
        {
            src: "https://thespaces.com/wp-content/uploads/2016/10/Penthouse-212-fifth-avenue-5.jpg"
        },
        {
            src: "https://thespaces.com/wp-content/uploads/2016/10/Penthouse-212-fifth-avenue-4.jpg"
        },
        {
            src: "https://thespaces.com/wp-content/uploads/2016/10/Penthouse-212-fifth-avenue-7.jpg"
        },
        {
            src: "https://img.cdn.zostel.com/cache/_0c130a41e670628551785b66a116ca0f/048_Exterior_04_1400x600.jpg"
        },
        {
            src: "https://img.cdn.zostel.com/zostel/cards/whats_new/None/20230512095618.jpg"
        }
    ]

    const handleOpen = (i) => {
        setSliderNumber(i);
        setOpen(true);
    }

    const handleMove = (d) => {
        let newSlideNumber;

        if (d === 'l') {
            newSlideNumber = (slideNumber - 1 + photos.length) % photos.length;
        } else {
            newSlideNumber = (slideNumber + 1 + photos.length) % photos.length;
        }
        setSliderNumber(newSlideNumber);
    }

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="hotelContainer">
                {open && <div className='slider'>
                    <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={() => setOpen(false)} />
                    <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={() => handleMove("l")} />
                    <div className="sliderWrapper">
                        <img src={photos[slideNumber].src} alt="" className="sliderImg" />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={() => handleMove("r")} />
                </div>
                }
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now</button>
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>New Market , Kolkata</span>
                    </div>
                    <span className="hotelDistance">
                        Excellent location - 500m from center
                    </span>
                    <span className="hotelPriceHighlight">
                        Book a stay over $114 at this property and get a free airport taxi
                    </span>
                    <div className="hotelImages">
                        {
                            photos.map((photo, i) => (
                                <div key={i} className="hotelImgWrapper">
                                    <img onClick={() => handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
                                </div>
                            ))
                        }
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className='hotelTitle'>Stay in the heart of India</h1>
                            <p className='hotelDesc'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo voluptas libero consequuntur deleniti et natus distinctio ea molestiae, facere magnam culpa reiciendis iure accusantium neque porro iusto, sunt itaque modi consectetur fuga. Tempora eos reiciendis iusto eum nihil quia quidem ratione totam fugiat aspernatur, amet, ab esse voluptatem doloremque. Cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aspernatur adipisci aliquam et ratione omnis? Repellendus modi molestias reprehenderit animi quia dolores. Laborum dolorem aut maxime voluptate ullam minima cupiditate molestiae eum qui accusantium, dolor deserunt sunt in id enim. Nostrum natus modi fugit provident neque voluptatem optio? Vero obcaecati aspernatur quidem. Magni a deleniti quo iste quaerat, accusamus est unde perferendis maxime iure amet quod ipsam, voluptatum quasi consectetur provident! Ipsam iure sequi nulla quia! Labore, fugiat? Commodi dolor molestias autem perspiciatis amet quibusdam eius! Numquam beatae maxime accusantium, sint consequuntur, suscipit recusandae fuga similique sunt vitae expedita assumenda! Tenetur quia asperiores deserunt, possimus dolorem dolore facilis vero neque. Neque omnis magnam quibusdam nihil, quidem natus? Minima autem iusto excepturi dolorem laudantium architecto aperiam magnam porro quis ut voluptatum fugit ratione quo ipsam doloribus, repellendus sapiente! Eveniet animi aperiam quibusdam enim quia sit modi accusamus at eaque, error iste.
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a holiday trip</h1>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente velit perferendis repudiandae ut corporis earum eum inventore sunt expedita quae?</span>
                            <h2>
                                <b>$945</b> (9 nights)
                            </h2>
                            <button>Reserve or Book Now</button>
                        </div>
                    </div>
                </div>
                <MailList />
                <Footer />
            </div>
        </div>
    )
}

export default Hotel