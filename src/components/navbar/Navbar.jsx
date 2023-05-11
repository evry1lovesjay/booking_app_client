import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Navbar.css"
import { axiosInstance } from "../../utils";

const Navbar = () => {
    const {user} = useContext(AuthContext)

    // const user = JSON.parse(localStorage.getItem("loggedInUser"))

    const navigate = useNavigate()

    const handleLogout = async ()=>{
        try {
            await axiosInstance.post("/auth/logout")
            localStorage.removeItem("loggedInUser")
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    return ( 
    <div className="navbar">
        <div className="navContainer">
            <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
            <span className="logo">My-booking</span>
            </Link>
            { user ? 
            
            (   <div className="navItems">
                {/* <p>{user.username}</p> */}
                <Link className="navButton">{user.username}</Link>
                <Link className="navButton" onClick={handleLogout}>Logout</Link>
            </div>
                ) 
            
            : ( 
                <div className="navItems">
                    <Link className="navButton">Register</Link>
                    <Link to="/login" className="navButton">Sign in</Link>
                </div>)}
        </div>
    </div> );
}
 
export default Navbar;