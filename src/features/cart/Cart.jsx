import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getcartprod } from "../../fetch/getcartprod"
import { handlevalue, removefromcartval } from "./Cartslice"
import styled from "styled-components"
import { baseAPI } from "../../fetch/baseAPI"
import { removefromcart } from "../../fetch/removefromcart"


const Styledforcart = styled.div`
width:100%;
 background-color:lightgray;
 display:flex;
 justify-content:center;
 gap:30px;


    & .checkout{
        width:20%;
        height:120px;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
        background-color:white;
        gap:20px;
        margin-top:30px;
        margin-bottom:30px;
        & button{
            width:70%;
            height:auto;
            border-radius:8px;
            background-color:orange;
            &:hover{
                cursor:pointer;
            }
        }
        & h2{
            height:15px;
            width:100%;
            display:flex;
            align-items:center;
            justify-content:center;
        }
    }

 


`

const Styleddivforcart = styled.div`
 width:70%;
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;
 gap:30px;
 

`


const Styldearticle =  styled.article`
width:100%;
display:flex;
margin-top:30px;
margin-bottom:30px;
background-color:white;
& .firstdiv{
    width:70%;
    display:flex;
    flex-direction:column;
    gap:100px;
    & h2{
        font-size: 30px;
    }
    & p{
        font-size: 30px;
        font-weight: bold;

    }
    & div{
        width:100%;
        display:flex;
        gap:30px;
        & span{
            background-color:white;
            color:#007185;
            margin-bottom:10px;
            &:hover{
                cursor:pointer;
                text-decoration:underline;
            }
        }
        & a{
            text-decoration:none;
            color:#007185;
            margin-bottom:10px;
            &:hover{
                cursor:pointer;
                text-decoration:underline;
            }
        }
    }

}

& figure{
    width:30%;
    display:flex;
    & img{
        width:100%;
        object-fit:fill;
        aspect-ratio:3/2;
        object-fit:contain;
    }
}


`

const Styledforemptycart = styled.div`

width:100%;
display:flex;
background-color:lightgray;
justify-content:center;
align-items:center;
& div{
    width:75%;
    height:300px;
    background-color:white;
display:flex;
flex-direction:column;
justify-content:center;
gap:40px;
align-items:center;

}



`

export const Cart = ()=>{


    const cartval = useSelector((state)=>state.cart.cartobj)
    const dispatch = useDispatch()

    useEffect(()=>{
        getcartprod().then((res)=>{
            dispatch(handlevalue(res.data))
            
        })
       
    },[dispatch])

    

    const Deleteitem = (productId)=>{
       
       removefromcart(productId)
       dispatch(removefromcartval(productId))
       

    }


    let priceofproduct = 0
    const sumofprice = (list)=>{
        
        list.map((ele)=>{
            priceofproduct+=ele.price
        })
        return priceofproduct
    }

    sumofprice(cartval)



    if(cartval.length===0){
        return(
            <Styledforemptycart> 
                <div>
                <h1>your cart is empty</h1>
                <h2>please add something</h2>
                </div>
            </Styledforemptycart>
        )
    }



    return (
        <Styledforcart>
    <Styleddivforcart>
      
       
        {cartval.map((ele)=>{
            return(
                <Styldearticle key={ele.id}>
            <figure>
                <img src={ele.images[0]}/>

            </figure>
            <div className="firstdiv">
            <h2>{ele.name}</h2>
            <p>{ele.price} $</p>
            <div>
                <span onClick={()=>Deleteitem(ele.id)}> delete</span>
               <a href="/"> save for later</a>
               <a href="/">compare with similar items</a>
            </div>
            

            </div>

        </Styldearticle>

            )
        })}


        
      
        
    </Styleddivforcart>

    <div className="checkout">
        <h2>Subtotal {`(${cartval.length} items)`}: ${priceofproduct}</h2>
        <button>proceed to checkout</button>
    </div>



    </Styledforcart>


    )
}