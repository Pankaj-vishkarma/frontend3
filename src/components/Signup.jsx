import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import './Signin.css'
function Signup()
{

   const [email,setemail]=useState()
   const [password,setpassword]=useState()
   const navigate=useNavigate()
  
   const handlesubmit=async(e)=>{
      e.preventDefault()
     
      try{

         const res=await axios({
            method:'post',
            url:["https://backend3-biy7.onrender.com/api/signup"],
            withCredentials:true,
            data:{email,password}
    
      })

      if(res.data.success)
      {
         alert('successfully Login')
         navigate('/result')
         console.log(res.data)
      }

      }catch(e)
      {
        alert('there are some error')
        console.log(e.message)
      }
      
   }



   return(
    <>
       <form className="container" onSubmit={handlesubmit}>
         <div className="signup-box">
         <div className="input">
            Email : <input type="email" name="email" onChange={(e)=>setemail(e.target.value)}/>
         </div>
         <br />
         <div className="input">
            Password : <input type="text" name="password" onChange={(e)=>setpassword(e.target.value)}/>
         </div>
         <br />
         <button className="input">submit</button>
         <br />
         <Link className="input" to='/'>
            new users?
         </Link>
         </div>
       </form>
    </>
   )
}

export default Signup
