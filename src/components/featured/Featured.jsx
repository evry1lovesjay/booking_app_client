import useFetch from "../../hooks/useFetch";
import "./featured.css"

const Featured = () => {
const {data, loading, error} = useFetch("/hotels/countByCity?cities=berlin,london,paris")

    return ( 
        <div className="featured">
            {loading ? 
            ("Loading please wait"):
            (<>
                <div className="featuredItem">
                    <img src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" alt="" className="featuredImg" />
                    <div className="featuredTitles">
                        <h1>Dublin</h1>
                        <h1>{data[0]} properties</h1>
                    </div>
                </div>
                <div className="featuredItem">
                    <img src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=" alt="" className="featuredImg" />
                    <div className="featuredTitles">
                        <h1>London</h1>
                        <h1>{data[1]} properties</h1>
                    </div>
                </div>
                <div className="featuredItem">
                    <img src="https://cf.bstatic.com/xdata/images/city/600x600/684500.jpg?k=df54bcea224564a0a00497a2076d5338316a0b56692498eddb3c02c9a6cdde64&o=" alt="" className="featuredImg" />
                    <div className="featuredTitles">
                        <h1>Paris</h1>
                        <h1>{data[2]} properties</h1>
                    </div>
                </div>
            </>)}
        </div>
     );
}
 
export default Featured;