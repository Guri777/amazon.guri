import { useEffect, useState } from "react"
import { baseAPI } from "../../fetch/baseAPI"
import { useDispatch, useSelector } from "react-redux"
import { handlelogin } from "../login/loginslice"
import { updateuserdata } from "../../fetch/updateuserdata"
import jwtDecode from "jwt-decode"
import userprofile from "./../../assets/userprofile.png"
import styled from "styled-components"


const Styledforprofieldiv = styled.div`

width:100%;
display:flex;
align-items:center;
justify-content:center;
margin-top:30px;
margin-bottom:30px;
gap:25px;
& .line{
    width:1px;
    height:200px;
    background-color:black;

}

& .foruserprofile{
    width:40%
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    & h2{
        margin-left:10%;
    }
    & figure{
        width:35%;
        box-sizing:border-box;
        border-radius:40px;
        & img{
            width:100%;
            box-sizing:border-box;
            border-radius:50px;
            object-fit:fill;
            object-fit:contain;

        }
    }
}

& .forinputs{
    width:50%;
    & form{
        width:100%;
        display:flex;
        flex-direction:column;
        gap:15px;
        & .line1{
            width:55%;
            height:1px;
            background-color:black;
        
        }
        & input{
            width:55%;
        }
        & button{
            width:20%;
            box-sizing:border-box;
            border-radius:8px;
            background-color:orange;
            margin-left:15%;
            &:hover{
                cursor:pointer;
            }

        }
}
}
`

export const Account = ()=>{

    const name = useSelector((state)=>state.login.unique_name)

    const [ account,setAccount] = useState({
       
        userName:"",
        email:"",
        newPassword:""
    })

    const userid = useSelector((state)=>state.login.nameid)
    const dispatch = useDispatch()

    useEffect(()=>{

        const tok = localStorage.getItem("token")
        const token = jwtDecode(tok)
        dispatch(handlelogin(token))

    },[dispatch])

    const handlesubmit = async(e)=>{
        e.preventDefault()
        // const res = await baseAPI.put("/api/User/updateuserdata", {...account,id:userid} )

        const res = updateuserdata({...account,id:userid})

        if(res.data.jwt){
            localStorage.setItem("token",res.data.jwt)
            const token = jwtDecode(res.data.jwt)
            dispatch(handlelogin(token))
            console.log(token)
            
            // window.location.href = "/"
        }
        console.log(res)
    }
    
    

    const handleinput  = (e)=>{

        const {name,value}=e.target

        setAccount((prev)=>({...prev,[name]:value}))

        // console.log(name,value)

    }

    


    return(
        <Styledforprofieldiv>
        <div className="foruserprofile">
            <figure>
                <img src={userprofile}/>
            </figure>
            <h2>{name}</h2>
        </div>

            <div className="line"></div>

        <div className="forinputs">
            <form onSubmit={handlesubmit}>
                <label id="email">email</label>
                <input type="email" name="email" id="email" onChange={handleinput} value={account.email}/>

                    <div className="line1"></div>

                <label id="username">username</label>
                <input type="text" name="userName" id="username" onChange={handleinput} value={account.userName}/>

                    
                    <div className="line1"></div>

                <label id="password">new/old password</label>
                <input type="password" name="newPassword" id="password" onChange={handleinput} value={account.newPassword} />

                <button type="submit">update</button>
            </form>
        </div>


        </Styledforprofieldiv>
    )
}