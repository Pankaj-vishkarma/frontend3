import { useNavigate } from "react-router-dom"

function Result()
{

    const navigate=useNavigate()

    const handleclick=()=>{
        navigate('/profile')
    }

    return (
        <>
           <h1>You are successfully Login</h1>
           <br />
           <button onClick={handleclick}>Profile</button>
        </>
    )
}

export default Result