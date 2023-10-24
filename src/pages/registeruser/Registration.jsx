import { useRef, useState } from "react"
import styled from "styled-components"
import { baseAPI } from "../../fetch/baseAPI"
import amazoni from "./../../assets/registracia.png"
import { useNavigate } from "react-router-dom"



export const Styleddivforreg = styled.div`

width:30%;
display:flex;
flex-direction:column;
align-items:center;
gap:20px;
margin:auto;
margin-bottom: 30px;
margin-top: 30px;



`
export const Styledform = styled.form`

width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:30px;
border-box:box-sizing;
border:1px solid black;
border-radius:7px;
& div{
    width:80%;
    display:flex;
    flex-direction:column;
    gap:10px;
    & p{
        color:red;
    }
    & input{
        border-radius:4px;
        height:27px;

    }
    & label{
        font-size:20px;
        font-family:monospace;
        
    }


}
& button{
    width:80%;
    height:27px;
    background-color:orange;
    color:black;
    cursor:pointer;
    border-radius:10px;
    margin-bottom: 20px;

}


` 

export const Registration = ()=>{

    const [userinfo,setUserinfo] = useState({
        userName:"",
        password:"",
        email:"",
        
    })

    const push = useNavigate()

    const [equal,setEqual]= useState(false)

    const [len,setLen] = useState(false)

    const [userval,setUserval] = useState(false)

    const [emailval, setEmailval] = useState(false)

    const passwordref = useRef()

    const reenter = useRef()
    const userref = useRef()
    const emailref = useRef()

    const handleinput = (e)=>{
        const {name,value} = e.target

        setUserinfo((prev)=>({...prev, [name]:value}))
    }

    const handlesubmit = (e)=>{
        e.preventDefault()
    }

    

    const handleRegister = async ()=>{
        // console.log(passwordref.current.value,"guri",reenter.current.value)

        const {userName,password,email} = userinfo
        if(userref.current.value==""  ){
            setUserval(true)
        }
        if(emailref.current.value==""){
            setEmailval(true)
        }
        if(passwordref.current.value.length<6 && passwordref.current.value==reenter.current.value){
            setLen(true)
            

        }
        if(passwordref.current.value!=reenter.current.value){
           
            setEqual(true)
        }

        
       
        else{
           
            
              
              const res = await baseAPI.post("/api/user/registerUser",{userName,password,email})
              
              if(res.data){
                push("/")
              }
           
           
        }
    }





    return(
       

        <Styleddivforreg>

            <figure>
                <img src={amazoni}/>
            </figure>
        
            <Styledform onSubmit={handlesubmit}>
                <h2>create account</h2>

                <div>
            <label id="username">your name</label>
            <input id="username" name="userName" value={userinfo.userName} onChange={handleinput} placeholder="First and last name" ref={userref}/>
              
              {userval && <p>please, write your username</p>}
            </div>

            <div>

            <label id="email">email</label>
            <input id="email" name="email" value={userinfo.email}  onChange={handleinput} type="email" ref={emailref}/>
                {emailval && <p>please, write your email</p>}
            </div>

            <div>
            <label id="password">password</label>
            <input id="password" name="password" value={userinfo.password}  type="password" onChange={handleinput} placeholder="at least 6 characters"  ref={passwordref} />
               {len && <p>password must be at least 6 characters</p>}
            </div>

            <div>
            <label id="re-enter">re-enter password</label>
            <input id="re-enter" ref={reenter} type="password"/>
            {equal && <p>it is not the same password</p>}
            </div>

            <button onClick={handleRegister}>continue</button>

            </Styledform>

            </Styleddivforreg>

        
    )
}