import{useState,useEffect}from "react";
import axios from'axios';


function Login(){
    const[password,setPassword]=useState("")
    const[email,setEmail]=useState("")
 

    const handlesubmit=(e)=>{
        e.preventDefault()
        axios.post('',{password,email})
        .then(result=>{console.log(result)})
        .catch(err=>console.log(err))
    }


return (
    <div>
        <div>
            <center><h2>Login</h2></center>
            <br>
            </br>
            
            <form onSubmit={handlesubmit}><center>
                <table>
                    <div>
                

                    <tr>
                    <td>
                    <label htmlFor="Email">
                        <strong>Email</strong></label></td>
               
                    <td><input type="text" placeholder="Enter Email" autoComplete="off"
                    name="Email" onChange={(e)=> setEmail(e.target.value)} required/></td>
                    </tr>
                    <tr>
                    <td>
                    <label htmlFor="Password">
                        <strong>Password</strong></label></td>
               
                    <td><input type="text" placeholder="Set Password" autoComplete="off"
                    name="Password" onChange={(e)=> setPassword(e.target.value)} required/></td>
                    </tr>
                    </div>
                </table>
                <div>
                    <br></br>
                <center><button type="submit" className="submit" >Login</button></center>
            
            </div>
            </center></form>
            <br>
            </br>
            <hr/>
            <center><div>Already have an account</div></center>
            <div>
            
            </div>

        </div>
    </div>
);
}
export default Login;