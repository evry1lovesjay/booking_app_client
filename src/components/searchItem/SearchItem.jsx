import "./searchItem.css"

const SearchItem = () => {
    return ( 
    <div className="searchItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square200/87382284.webp?k=1b46c8769cf6052aca05a4f4efad1d8aa205702da3468ce8d54e6af3e66e3c73&o=&s=1" alt="" className="siImg"/>
        <div className="siDesc">
            <h1 className="siTitle">Tower Street Apartments</h1>
            <span className="siDistance">500m from center</span>
            <div className="siTaxiOp">Free airport taxi</div>
            <span className="siSubtitle">Studio Apartment with Air conditioning</span>
            <span className="siFeatures">Entire studio ~ 1 bathroom ~ 21m 1 full bed</span>
            <span className="siCancelOp">Free cancellation</span>
            <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailsTexts">
                <span className="siPrice">$123</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className="siCheckButton">See availability</button>
            </div>
        </div>
    </div>
    
      );
}
 
export default SearchItem;