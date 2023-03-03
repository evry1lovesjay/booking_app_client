import "./searchItem.css"
import { useNavigate } from "react-router-dom"

const SearchItem = ({item}) => {

    const navigate = useNavigate()

    const handleSearch = () =>{
        navigate(`/hotels/${item._id}`)
    }

    return ( 
    <div className="searchItem">
        <img src={item.photos[0]} alt="" className="siImg"/>
        <div className="siDesc">
            <h1 className="siTitle">{item.name}</h1>
            <span className="siDistance">{item.distance}</span>
            <div className="siTaxiOp">Free airport taxi</div>
            <span className="siSubtitle">Studio Apartment with Air conditioning</span>
            <span className="siFeatures">{item.desc}</span>
            <span className="siCancelOp">Free cancellation</span>
            <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
        </div>
        <div className="siDetails">
            {item.rating && 
            <div className="siRating">
                <span>Excellent</span>
                <button>{item.rating}</button>
            </div>
            }
            <div className="siDetailsTexts">
                <span className="siPrice">${item.cheapestPrice}</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                
                
                
                {/* <link to={`/hotels/${item._id}`}> */}
                <button className="siCheckButton" onClick={handleSearch}>See availability</button>
                {/* </link> */}
            </div>
        </div>
    </div>
    
      );
}
 
export default SearchItem;