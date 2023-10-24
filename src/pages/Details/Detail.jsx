import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { handleprod } from "./Detailslice"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import { handleaddvalue, handlevalue } from "../../features/cart/Cartslice"
import { getcartprod } from "../../fetch/getcartprod"
import { postitem } from "../../fetch/postitem"
import { getbyid } from "../../fetch/getbyid"
// import { handlecartvallength } from "../../features/cart/Cartslice"

const Styleddiv = styled.div`

width:90%;
display:flex;
align-items:center;
margin:auto;
gap:70px;

& .suratebi{
    width:15%;
    display:flex;
    flex-direction:column;
    gap:20px;
    & img{
        width:50%;
    }

}

& .bigimage{
    width:50%;

   
    & .didisurati{
        width:100%;
    }

}

& .agwera{
    width:50%;
    display:flex;
    flex-direction:column;
    gap:30px;
    & h2{
        font-size:12px;
    }
   

}



`

const Styleddivfordet = styled.div`
width:25%;
display:flex;
flex-direction:column;
gap:20px;
& p{
    color:red;
    font-size:25px;
}
& .addtocart{
    width:30%;
    background-color:orange;
    box-sizing:border-box;
    border-radius:8px;
    &:hover{
        cursor:pointer;
    }

}

& .buynow{
    width:30%;
    background-color:yellow;
    box-sizing:border-box;
    border-radius:8px;
    &:hover{
        cursor:pointer;
    }

}

`

export const Detail = ()=>{

    const  details = useSelector((state)=>state.detail.value)
    
    const dispatch = useDispatch()

    const push = useNavigate()

    const gh = useParams()

    useEffect(()=>{
       
    
     getbyid(gh.id).then((res)=>{
            dispatch(handleprod(res))

     })
    //  getcartprod().then((res)=>{
    //     dispatch(handlevalue(res.data))
    // })

       
    },[dispatch])


    const handlebuynow = ()=>{
        push("/Buynow")
    }
   


    const handlepost = (id)=>{

      
        dispatch(handleaddvalue(postitem(id)))

       
        getcartprod().then((res)=>{
            dispatch(handlevalue(res.data))
        })

        // console.log("guri",postitem(id))

       

    }
   
    

    return (
        
        <>
        
       
         
               
                   {details.id && <Styleddiv  key={details.id}>
                        <div className="suratebi">
                        {details.images.map((elem)=>{
                            return(
                                <img src={elem}/>
                            )
                        })}
                        </div>
                        <div className="bigimage">
                            <h2>{details.name}</h2>
                            <img  className="didisurati" src={details.images[0]}/>
                        </div>
                        <div className="agwera">
                            <h2>{details.description}</h2>
                           
                            
                        </div>
                        <Styleddivfordet>
                        <p>{details.price} $</p>
                        <button onClick={()=>handlepost(details.id)} className="addtocart">add to cart</button>
                        <button className="buynow" onClick={handlebuynow}>buy now</button>

                        </Styleddivfordet>
                       
                        </Styleddiv>
                        
                   
                
                    }

         
            
       

        </>
    )
}