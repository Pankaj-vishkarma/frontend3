import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function Signin()
{

    const [firstname,setfirstname]=useState()
    const [lastname,setlastname]=useState()
    const [email,setemail]=useState()
    const [dateofbirth,setdateofbirth]=useState()
    const [mobile,setmobile]=useState()
    const [address,setaddress]=useState()
    const [password,setpassword]=useState()
    const [confirmpassword,setconfirmpassword]=useState()
    const navigate=useNavigate()


    const handlesubmit=async(e)=>{
        e.preventDefault()

        try{
            const res=await axios({
                method:'post',
                url:['http://localhost:12345/api/signin'],
                withCredentials:true,
                data:{firstname,lastname,email,dateofbirth,mobile,address,password,confirmpassword}
             })
     
             if(res.data.success)
             {
                 alert('successfully registered')
                 navigate('/signup')
                 console.log(res.data)
             }
        }catch(e)
        {
            alert('there are some error')
            console.log(e.message)
            console.log(e)
        }
        


    }

    return(
        <>
        <form onSubmit={handlesubmit}>
            <div>
                First Name : <input type="text" name="firstname" onChange={(e)=>setfirstname(e.target.value)}/>
            </div>
            <br />
            <div>
                Last Name : <input type="text" name="lastname" onChange={(e)=>setlastname(e.target.value)}/>
            </div>
            <br />
            <div>
                Email : <input type="email" name="email" onChange={((e)=>setemail(e.target.value))}/>
            </div>
            <br />
            <div>
               Date Of Birth : <input type="date" name="dateofbirth" onChange={(e)=>setdateofbirth(e.target.value)} />
            </div>
            <br />
            <div>
                Mobile Number : <input type="text" name="mobile" onChange={(e)=>setmobile(e.target.value)}/>
            </div>
            <br />
            <div>
                Address : <input type="text" name="address" onChange={(e)=>setaddress(e.target.value)}/>
            </div>
            <br />
            <div>
                Password : <input type="text" name="password" onChange={(e)=>setpassword(e.target.value)}/>
            </div>
            <br />
            <div>
                Confirm password : <input type="text" name="confirmpassword" onChange={(e)=>setconfirmpassword(e.target.value)}/>
            </div>
            <br />
            <button>submit</button>
            <br />
            <Link to='/signup'>Are you registered?</Link>
        </form>
        </>
    )
}

export default Signin