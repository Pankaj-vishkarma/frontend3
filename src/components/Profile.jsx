import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import './Signin.css'

function Profile()
{
    const [data,setdata]=useState({})
    const navigate=useNavigate()

    useEffect(()=>{
        fun()
    },[])

    const fun=async()=>{
        try{
            const res=await axios({
                method:'get',
                baseURL:"http://localhost:12345/api/profile",
                withCredentials:true
            })
    
            if(res.data.success)
            {
                setdata(res.data.data)
                alert('successfully login')
               
                console.log(res.data.data)
            }
        }catch(e)
        {
            alert('there are issue in your profile')
            console.log(e.message)
        }
        
    }

    const handleclick=async()=>{

        try{
            const res=await axios({
                method:'get',
                baseURL:"http://localhost:12345/api/logout",
                withCredentials:true
            })
    
            if(res.data.success)
            {
                alert('successfully Logout')
                navigate('/signup')
    
            }
        }catch(e)
        {
            alert('issue in logout')
            console.log(e.message)
        }
        
    }

    

    return(
        <div className="container-2">
        <div>
            <h1>Your Profile</h1>
        </div>
        <br />
        <div>
            <h2>First Name : {data.firstname}</h2>
            <br />
            <h2>Last Name : {data.lastname}</h2>
            <br />
            <h2>Email : {data.email}</h2>
            <br />
            <h2>Date Of Birth : {data.dateofbirth}</h2>
            <br />
            <h2>Mobile Number : {data.mobile}</h2>
            <br />
            <h2>Address : {data.address}</h2>
            <br />
            <button onClick={handleclick}>Logout</button>
        </div>

        </div>
    )
}

export default Profile