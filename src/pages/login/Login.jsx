import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Login.css"
import { axiosInstance } from "../../utils";

const Login = () => {

    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
    })

    const {loading, error, dispatch} = useContext(AuthContext)

    const navigate= useNavigate()

    const handleChange = (e) =>{
        setCredentials((prev) => ({...prev, [e.target.id]: e.target.value}))
    }

    const handleClick = async (e) =>{
        e.preventDefault()
        dispatch({type:"LOGIN_START"})
        try{
            const res = await axiosInstance.post("/auth/login", credentials)
            localStorage.setItem("loggedInUser", JSON.stringify(res.data.details));
            dispatch({type: "LOGIN_SUCCESS", payload: res.data.details})
            navigate("/")
        }catch(err){
            dispatch({type:"LOGIN_FAILED", payload: err.response.data})
        }
    }

    return ( <div className="login">
        <div className="lContainer">
            <input type="text" placeholder="username" id="username" onChange={handleChange} className="lInput" />
            <input type="password" placeholder="password" id="password" onChange={handleChange} className="lInput" />
            <button disabled={loading} className="lButton" onClick={handleClick}>Login</button>
            {error && <span>{error.message}</span>}
        </div>
    </div> );
}
 
export default Login;