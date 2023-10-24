import { useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addcategories, handlecartvalue, handleinput } from "./Headerslice"
import { getcategories } from "../../fetch/getcategories"
import styled from "styled-components"
import amazoni_logo from "./../../assets/amazoni-logo.png"

import { useNavigate } from "react-router-dom"
import drosha from "./../../assets/drosha.png"
import arrowforuser from "./../../assets/amazon-nav-arrow.png"

import carti from "./../../assets/cart.png"
import location from "./../../assets/location.png"
import { handlelogin, handlelogout } from "../../pages/login/loginslice"
import jwtDecode from "jwt-decode"
import { Foruser } from "../../features/foruser/Foruser"
import { getcartprod } from "../../fetch/getcartprod"
import { handleaddvalue, handlevalue } from "../../features/cart/Cartslice"
import { postitem } from "../../fetch/postitem"
import { Livesearch } from "../../pages/livesearch/Livesearch"
// import { handlevalue } from "../../features/cart/Cartslice"

const Stylednav = styled.nav`
width:100%;



& ul{
    width:100%;
    display:flex;
    gap:20px;
    list-style:none;
    font-size:15px;
    background-color:#232f3e;
    height:39px;
    align-items:center;
    & li{
        height:100%;
        display:flex;
        align-items:center;
        justify-content:center;
        color:white;
        text-decoration: none;
        &:hover {
            cursor: pointer;
            border-box:box-sizing;
            border:1px solid white;
            
        }
    }
   
    

}


`

const Styledheader = styled.header`
    width: 100%;
    height: 60px;
    display: flex;
    gap:30px;
    align-items:center;
    background-color:#212d3a;
    position: relative;

    & .forlocation{
        width:8%;
        display:flex;
        &:hover{
            border-box:box-sizing;
            border:1px solid white;
            cursor:pointer;

        }
        & figure{
            width:32%;
            & img{
                width:100%;
                object-fit:fill;
                object-fit:contain;
                mix-blend-mode:darken;
            }
        }

        & div{
            width:50%;
            display:flex;
            flex-direction:column;
            & h2{
                color:white;
                font-size:20px;

            }
            & p{
                color:white;
                font-size:12px;
            }
        }
    }
    & figure{
        width: 113px;
        height: 50px;
        & .firstamazonlogo{
            width: 100%;
            mix-blend-mode:lighten;
            &:hover{
                cursor:pointer;
                border-box:box-sizing;
                border:1px solid white;
            }
        }

        }
        & img{
            width: 100%;
            mix-blend-mode:lighten;
            &:hover{
                cursor:pointer;
               
            }
        }
    }
    
    & .forcart{
        width:5rem;
        height:3.125rem;
        position:relative;
        display: flex;
        &:hover{
            border-box:box-sizing;
            border:1px solid white;
            cursor:pointer;
        }
        
         & figure{
             width:100%;
             display: flex;
             align-items: center;
           
        
             
             & img {
                 width:3rem;
                 heigth:2.1rem;
             }
         }
         & .cartlength{
            position:absolute;
            color:#f08804;
            top:3px;
            left:22px;
            font-size:24px;
         }
         & .cart{
            position:absolute;
            color:white;
            bottom:5px;
            right:8px;
         }
     }

     & .foruser{
        width:9rem;
        height:3.125rem;
        display: flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        color:white;
        position:relative;
          

        & figure{
            width:16px;
            height:16px;
            position:absolute;
            bottom:10px;
            right:0;
            & img{
                width:100%;
            }
        }

        & .foruser_content{
            display:none;
            width:450px;
            height:auto;
            background-color:white;
            position:absolute;
            top:50px;
            left:-181px;
            box-sizing:border-box;
            padding:24px 24px;
            gap:20px;  
            border-radius:7px;
            z-index:1;

            &::before{
                content:"";
                background-color:white;
                width:24px;
                height:24px;
                position:absolute;
                top:-5px;
                left:290px;
                transform:rotate(-45deg);
            }
             & .forahref{
                width:100%;
                height:40px;
                background-color:#e7f4f5;
                display:flex;
                justify-content:flex-end;
                border-radius:10px;
                align-items:center;
                & a{
                    
                    color:#007185;
                    border-radius:8px;
                    text-decoration:none;
                    padding-right:7px;
                    &:hover{
                        color:#c7511f;
                    }
             }   
           
                
            }
            & button{
                width:45%;
                height:30px;
                display:inline;
                background-color:#ffd814;
                border-radius:8px;
                margin-left:100px;
                &:hover{
                    cursor:pointer;
                }
                
            }
            & div{
                width:100%;
                display:flex;
                & .right{
                    padding-left:70px;
                } 
               & nav{
                width:40%;
               
                &  ul{
                    width:100%;
                    display:flex;
                    flex-direction:column;
                    justfy-content:center;
                    gap:7px;
                    & li{
                        color:black;
                        text-decoration: none;
                        list-style:none;
                        &:hover {
                            cursor: pointer;
                            color:orange;
                            
                        }

                    }
                }
               }


            }


        }
        &:hover{
            border-box:box-sizing;
            border:1px solid white;
           
            .foruser_content{
                display: flex;
                flex-direction:column;
                justify-content:center;
            }


        }
       
        & p{
            &:hover{
                cursor:pointer;
            }

        }
        & h2{
            font-size:15px;
            &:hover{
                cursor:pointer;
            }
            
        }


     }

     & .forreturns{
        width:4rem;
        height:3.125rem;
        display: flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        color:white;
        &:hover{
            border-box:box-sizing;
            border:1px solid white;
            cursor:pointer;
        }
        & .return{
            font-size:12px;

        }
        & h2{
            font-size:15px;
            
        }

     }

     & .forlanguage{
        width:5rem;
        height:3.125rem;
        display: flex;
        justify-content:center;
        align-items:center;
        color:white;
        &:hover{
            border-box:box-sizing;
            border:1px solid white;
            cursor:pointer;
        }
        & figure{
            width:70%;
            & img{
                width:100%;
                object-fit:fill;
                object-fit:contain;
                
            }
        }
        & h2{
            font-size:15px;
            
        }


     }





`


export const Header=()=>{

    const header = useSelector((state)=>state.header.value)
    const dispatch=useDispatch()
    const push = useNavigate()
    const cartval = useSelector((state)=>state.cart.cartobj)

    // const livesearch = useSelector((state)=>state.livesearch.value)
    

   
    const {isloggedin,unique_name} = useSelector((state)=>state.login)

    // const [useraccount,setUseraccount] = useState(false)

    

    useEffect(()=>{
        getcategories().then((res)=>{
            dispatch(addcategories(res.data))
        })

        getcartprod().then((res)=>{
            dispatch(handlevalue(res.data))
        })
        const token = localStorage.getItem("token")

        if(token){

            const decodedtoken = jwtDecode(token)


            dispatch(handlelogin(decodedtoken))

        }
       
        
    },[dispatch])

    // useEffect(()=>{
    //     const token = localStorage.getItem("token")
       
    //      getcartprod().then((res)=>{
    //         dispatch(handlevalue(res.data))
    //     })
        // dispatch(handleaddvalue(postitem(id)))

        


    // },[dispatch])

    

    const handlenav = (a)=>{
        push(`/header/${a}`)
    }
    

    const handlemainpage=()=>{
        push("/")
    }


    const removejwt = ()=>{
        localStorage.removeItem("token")
        dispatch(handlelogout())
    }

    const handleforlogin = ()=>{
        push("/login")
    }

    const handlecart = ()=>{
        push("/cart")
    }
    const handleAccount = ()=>{
        push("/Account")
    }

    return(
        <>
        <Styledheader>
            {/* <button onClick={rame}>asdfwr</button> */}
            
                <figure >
                    <img src={amazoni_logo} onClick={handlemainpage} className="firstamazonlogo"/>

                </figure>

                <div className="forlocation">
                        <figure>
                            <img src={location}/>
                        </figure>
                        <div>
                            <p>Deliver to</p>
                            <h2>Georgia</h2>
                        </div>
                    </div>

               <Livesearch/>
            


                <div className="forlanguage">
                    <figure>
                        <img src={drosha}/>
                    </figure>
                        <h2>EN</h2>
                </div>

                <div className="foruser">
                    <p>{isloggedin ? `Hello ${unique_name}`:"Hello sign-in"}</p>
                    
                        <h2>Account & List </h2>
                        <figure>
                            <img src={arrowforuser}/>
                        </figure>
                    
                    
                    {/* {useraccount && <Foruser/>} */}
                    <div className="foruser_content">
                        {!isloggedin ? <button onClick={handleforlogin}>sign in</button>:<div className="forahref"><a href="/Account"> Manage your accaount</a></div>}
                        <div>
                                <nav className="left">
                                    <ul>
                                        <li>create list</li>
                                        <li>find a list or registry</li>
                                    </ul>
                                </nav>
                                <nav className="right">
                                    <ul>
                                        <li onClick={handleAccount}>Account</li>
                                        <li>Orders</li>
                                        <li>Recommendations</li>
                                        <li>Browsing History</li>
                                        <li>Watchlist</li>
                                        <li>Video Purchase & Rentals</li>
                                        <li>Kindle Unlimited</li>
                                        <li>Content & Devices</li>
                                        <li>Subscribe & save items</li>
                                        <li>Membershps and Suscriptions</li>
                                        <li>Music library</li>
                                        {isloggedin && <li onClick={removejwt}>sign out</li>}
                                    </ul>
                                </nav>
                        </div>
                    </div>

                </div>

                <div className="forreturns">
                    <p>Returns </p>
                    <h2 className="returns">& orders</h2>
                </div>

                <div className="forcart" onClick={handlecart}>
                    <div>
                     <span className="cartlength">{isloggedin ?cartval.length:0}</span>
                    <figure>
                        <img src={carti}/>
                    </figure>
                    </div>
                    <span className="cart">cart</span>
                </div>

                

                

            
            </Styledheader>

            
            <Stylednav>

               
            <ul>
                {header.map((ele,index)=>{
                return(
                   
                        <li key={index} onClick={()=>handlenav(ele.id)}>{ele.name}</li>
                    
                )
            })}

                </ul>

            </Stylednav>
                
           
       

        
        </>
       
        
    )
}