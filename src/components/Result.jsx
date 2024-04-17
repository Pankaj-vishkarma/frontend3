import { useNavigate } from "react-router-dom"
import './Signin.css'
function Result()
{

    const navigate=useNavigate()

    const handleclick=()=>{
        navigate('/profile')
    }

    return (
        <div className="container">
            <div className="result-box">
           <h1>You are successfully Login</h1>
           <br />
           <button onClick={handleclick}>Profile</button>
           </div>
        </div>
    )
}

export default Result