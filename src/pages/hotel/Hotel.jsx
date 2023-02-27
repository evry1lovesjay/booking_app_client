import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import "./hotel.css"

const Hotel = () => {

    const [slideNumber, setSlideNumber] = useState(0)
    const [open, setOpen] = useState(false)

    const photos = [
        {
            src:"https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1"
        },
        {
            src:"https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1"
        },
        {
            src:"https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1"
        },
        {
            src:"https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1"
        },
        {
            src:"https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1"
        },
        {
            src:"https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1"
        },
    ]

    const handleOpen =(i) => {
        setSlideNumber(i);
        setOpen(true)
    }

    const handleMove =(direction) => {
        let newSlideNumber;

        if(direction==="l"){
            newSlideNumber = slideNumber=== 0? 5: slideNumber-1
        }else{
            newSlideNumber = slideNumber=== 5? 0: slideNumber + 1;
        }

        setSlideNumber(newSlideNumber)
    }

    return (
    <div>
        <Navbar/>
        <Header type="list"/>
        <div className="hotelContainer">
            {open && <div className="slider">
                <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
                <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=> handleMove("l")} />
                <div className="sliderWrapper">
                    <img src={photos[slideNumber].src} alt="" className="sliderImg" />
                </div>
                <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=> handleMove("r")}/>
            </div>}
            <div className="hotelWrapper">
                <button className="bookNow">Reserve or Book Now!</button>

                <h1 className="hotelTitle">Grand Hotel</h1>
                <div className="hotelAddress">
                    <FontAwesomeIcon icon={faLocationDot}/>
                    <span>Elton St 125 New York</span>
                </div>
                <span className="hotelDistance">Excellent location - 500m from center</span>
                <span className="hotelPriceHighlight">Book a stay over $114 at this property and get a free airport taxi</span>
                <div className="hotelImages">   
                    {photos.map((photo, i)=>(
                        <div className="hotelImgWrapper">
                            <img src={photo.src} onClick={()=>handleOpen(i)} alt="" className="hotelImg" />
                        </div>
                    ))}
                </div>
                <div className="hotelDetails">
                    <div className="hotelDetailsTexts">
                        <h1 className="hotelTitle">Stay in the heart of Krakov</h1>
                        <p className="hotelDesc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eius porro soluta aspernatur eveniet non, totam nam quia? Quis necessitatibus mollitia pariatur at consequuntur nobis, ipsa, neque eligendi alias sint consectetur voluptatibus reprehenderit consequatur ullam fugit. Eveniet corrupti nam facere, deserunt dolores commodi officia soluta totam quae sint tempore libero nesciunt incidunt veritatis tenetur voluptas beatae dicta officiis dolore nisi dignissimos eaque et. Aut, officiis, nesciunt cupiditate asperiores magni illum iusto fuga tenetur consequuntur explicabo quos totam eaque esse ex laudantium similique sed unde id placeat quae soluta consectetur vero. Dignissimos enim sunt id inventore adipisci in debitis deleniti unde!
                        </p>
                    </div>
                    <div className="hotelDetailsPrice">
                        <h1>  Perfect for a 9-night stay!</h1>
                        <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ipsa eius accusantium a, esse ab laudantium sit illum!
                        </span>
                        <h2>
                            <b>$945</b> (9 nights)
                        </h2>
                        <button>Reserve or Book Now!</button>
                    </div>
                </div>
            </div>
            <MailList/>
            <Footer/>
        </div>
    </div> );
}
 
export default Hotel;