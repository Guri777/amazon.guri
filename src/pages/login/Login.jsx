import { useState } from "react"
import { Styleddivforreg, Styledform } from "../registeruser/Registration"
import amazoni from "./../../assets/registracia.png"
import { useDispatch, useSelector } from "react-redux"
import { getlogin } from "../../fetch/getlogin"
import jwtDecode from "jwt-decode"
import { handlelogin } from "./loginslice"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useEffect } from "react"

const RegistrationButton = styled.button`

width:80%;
height:25px;
border-box:box-sizing;
border:0.5px solid black;
border-radius:5px;
background-color:white;
font-size:20px;
display:flex;
justify-content:center;
align-items:center;
&:hover{
    cursor:pointer;
}


`

export const Login = ()=>{

    const val = useSelector((state)=>state.login)

    const [userlogin,setUserlogin] = useState({
        email:"",
        password:""
    })

    const push = useNavigate()


    const dispatch = useDispatch()

    
    const handlechange = (e)=>{
        e.preventDefault()
    }

    const handleinput = (e)=>{
        const {name,value}=e.target

        setUserlogin((prev)=>({...prev,[name]:value}))
      

    }

    const handlelogin1 =async ()=>{

        const user = await getlogin(userlogin)
        if(user.data.jwt){
            localStorage.setItem("token",user.data.jwt)
            const token = jwtDecode(user.data.jwt)
            dispatch(handlelogin(token))
            console.log(token)
            // push("/")
            window.location.href = "/"
        }
        
       

    }

    const handleToregistration = ()=>{
        push("/registration")
    }

    return(
        <Styleddivforreg>
            <figure>
                <img src={amazoni}/>
            </figure>

        <Styledform onSubmit={handlechange}>

        <h2>Sign-in</h2>

        <div>
        <label id="email">Email or mobile phone number</label>
        <input id="email" name="email" onChange={handleinput} value={userlogin.email} type="email"/>
        </div>

        <div>
        <label id="password"> enter your password</label>
        <input  id="password" name="password" onChange={handleinput} value={userlogin.password} type="password"/>
        </div>

        <button onClick={handlelogin1}>continue</button>

        </Styledform>
        <RegistrationButton onClick={handleToregistration}>Create your Amazon account</RegistrationButton>

        </Styleddivforreg>
    )
}