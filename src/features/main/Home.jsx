import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addmostdemand, addofferstoslider, addproduct, addproductstoslider } from "./Homeslice"
import { getoffers } from "../../fetch/getoffers"
import { getmostdemandproducts } from "../../fetch/getmostdemandproducts"
import { getlatestproducts } from "../../fetch/getlatestproducts"

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import styled from "styled-components"
import { getproducts } from "../../fetch/getproducts"

import pirveli from "./../../assets/pirveli.jpg"
import meore from "./../../assets/meore.jpg"
import mesame from "./../../assets/mesame.jpg"
import meotxe from "./../../assets/meotxe.jpg"
import mexute from "./../../assets/mexute.jpg"
import { useNavigate } from "react-router-dom"

// const styledwrapper = styled.div`
// width:100%;
// background-color:lightgray;
// display:flex;
//  flex-direction:column;
//  align-items:center;
//  justify-content:center;


// `


const Styleddiv = styled.div`


 width:100%;
 background-color:lightgray;
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;
 gap:30px;

 & .carousel{
    width:95%;
    & .slick-arrow{
        padding-bottom:20%;
    }
    & div {
        width:100%;
        position:relative;
       
        & img{
            width:100%;
            &:hover{
                cursor:pointer;
            }
        }
       
    }
    
    & .mostdemand{
        width:100%;
        height:350px;
        position:absolute;
        display:flex;
        gap:30px;
        top:43%;
        left:0;
        flex-wrap:wrap;
        & div{
            width:20%;
            height:100%;
            display:flex;
            flex-direction:column;
            background-color:white;
            margin-left:2.8%;
            gap:40px;
            
            & h2{
                width:100%;
                font-size:20px;
            }
            & a{
                width:100%;
                color: blue;
                text-decoration: none;
                &:hover {
                    text-decoration: underline;
                    cursor:pointer;
                }

            }
            & div{
                width:80%;
                display:flex;
                flex-direction:column;
                & div{
                    width:100%;
                    display:flex;
                    flex-direction:row;
                    & .smallfigure{
                        width:50%;
                        display:flex;
                        flex-direction:row;
                        & img{
                            width:100%;
                            object-fit:fill;
                            aspect-ratio:3/2;
                            object-fit:contain;
                            &:hover{
                                cursor:pointer;
                            }
                        }
                    }
                }
               
                   
                    
                
            }
           
        }
      
        

    }
    
   
    
 }

 
    
    & .latestproducts{
        width:100%;
        height:auto;
        display:flex;
        flex-wrap:wrap;
        margin:auto;
       
        & div{
            width:20%;
            height:100%;
            display:flex;
            flex-direction:column;
            justify-content:space-around;
            background-color:white;
            margin:auto;
            gap:40px;
           
            & h2{
                width:100%;
                font-size:20px;
            }
            & a{
                width:100%;
                color: blue;
                text-decoration: none;
                &:hover {
                    text-decoration: underline;
                    cursor:pointer;
                }

            }
            & div{
                width:80%;
                display:flex;
                flex-direction:column;
                & div{
                    width:100%;
                    display:flex;
                    flex-direction:row;
                    & .smallfigurelatest{
                        width:50%;
                        display:flex;
                        flex-direction:row;
                        & img{
                            width:100%;
                            object-fit:fill;
                            aspect-ratio:3/2;
                            object-fit:contain;
                            &:hover{
                                cursor:pointer;
                            }
                        }
                    }
                }
               
                   
                    
                
            }
           
        }
      
        

    }
    
   
    
 

 
 

 & .categoriesoffers{
    width:100%;
    margin-top: 30px;
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
    gap:60px;
    & a{
        margin-bottom: 0;
        padding-bottom:0;
        &:hover{
            cursor:pointer;
        }
    }
    & div{
        
        width:21%;
        height:40%;
        
        background-color:white;
        display:flex;
        flex-direction:column;
        gap:30px;
        & a{
            color: blue;
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }

        }
        & figure{
            width:100%;
            height:70%;
            &:hover{
                cursor:pointer;
            }
            & img{
           
                width:100%;
                height:100%;
                object-fit:fill;
                aspect-ratio:3/2;
                object-fit:contain;
                
                
             }

        }
      


    }

 }

 & .wrapp{
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:80px;
    margin-bottom: 30px;
 
 & .opaa{
    width:95%;
    height:300px;
   
    background-color:white;
    
    & button{
        width:40px;
        color:white;
        background-color:blue;
     }
     & .insideslideroffer{
        height:100%;
        & .inside{
            display:flex;
            flex-direction:column;
            justify-content:center;
            & div{
                display:flex;
                justify-content:center;
                align-items:center;
                
                & .axali{
                    color:red;
                    text-decoration-thickness: auto;  
                    margin-right:90px;
                }
                & p{
                    margin-right:90px;

                }

            }
            & figure{
                display:flex;
            justify-content:center;
            align-items:center;
            width: 200px;
            height:150px;
    
            
            & img{
                width: 100%;
               
                object-fit:fill;
                aspect-ratio:3/2;
                object-fit:contain;
                
                
             }
            }

        }
     
       }
       
    }
     }
`


    const settings = {
    //   dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows:false
    };

    const settings1 = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      const pictures = [pirveli,meore,mesame,meotxe,mexute]


export const Home = ()=>{
    const latestproduct = useSelector((state)=>state.home.value)
    const dispatch = useDispatch()

    const offers = useSelector((state)=>state.home.offersvalue)

    const mostdemand = useSelector((state)=>state.home.mostdemand)

    const products = useSelector((state)=>state.home.product)

    const sliderRef1 = useRef()

    const sliderRef2 = useRef()

    const sliderRef3 = useRef()

    const push = useNavigate()


    useEffect(()=>{
        getlatestproducts().then((res)=>{
            dispatch(addproductstoslider(res.data))
        })

        getoffers().then((res)=>{
            dispatch(addofferstoslider(res.data))
        })

        getmostdemandproducts().then((res)=>{
            dispatch(addmostdemand(res.data))

           

        })
        getproducts().then((res)=>{
            dispatch(addproduct(res.data))
        })
    },[])

    


    const Handlenavigateoffers = (id)=>{
        push(`/${id}`)
        document.documentElement.scrollTop = 0;
    }

    const mostdemandslice = mostdemand.slice(0,4)
    const latestproductslice = latestproduct.slice(0,4)

    


    return(
        

        

        
    
      <Styleddiv>

        
        <div className="carousel">
            <Slider {...settings1} >
            {
                pictures.map((ele)=>{
                    return(
                        <div key={ele.id}>
                        <img   src={ele}/>
                        </div>
                    )

                })
            }
            
           
            </Slider>

            <div className="mostdemand">
                {mostdemandslice.map((ele)=>{
                    let imgs1 = ele.images.slice(0,2)
                    let imgs2 = ele.images.slice(2,4)
                    return(
                        <div onClick={()=>Handlenavigateoffers(ele.id)} key={ele.id}>
                            <h2>{ele.brand}</h2>
                            <div>
                            <div>
                            {imgs1.map((elem,index)=>{
                                
                                return(
                                    <figure className="smallfigure" key={index}>
                                    <img src={elem}/>
                                    </figure>
                                )
                            })}
                            </div>
                            <div>
                            {imgs2.map((elem,index)=>{
                                
                                return(
                                    <figure className="smallfigure" key={index}>
                                    <img src={elem}/>
                                    </figure>
                                )
                            })}
                            </div>
                           
                       
                        </div>
                        <a  onClick={()=>Handlenavigateoffers(ele.id)}>see more</a>
                        </div>
                       
                    )
                })}
            </div>  

            
           
        </div>

        <div className="latestproducts">
                {latestproductslice.map((ele)=>{
                    let imgs1 = ele.images.slice(0,2)
                    let imgs2 = ele.images.slice(2,4)
                    return(
                        <div  onClick={()=>Handlenavigateoffers(ele.id)} key={ele.id}>
                            <h2>{ele.brand}</h2>
                            <div>
                            <div>
                            {imgs1.map((elem,index)=>{
                                
                                return(
                                    <figure className="smallfigurelatest" key={index}>
                                    <img src={elem}/>
                                    </figure>
                                )
                            })}
                            </div>
                            <div>
                            {imgs2.map((elem,index)=>{
                                
                                return(
                                    <figure className="smallfigurelatest" key={index}>
                                    <img src={elem}/>
                                    </figure>
                                )
                            })}
                            </div>
                           
                       
                        </div>
                        <a  onClick={()=>Handlenavigateoffers(ele.id)}>see more</a>
                        </div>
                       
                    )
                })}
            </div>  



    
        <div className="categoriesoffers">
        
    
      
    
            {products.map((ele)=>{
                return(
                    <div key={ele.id}>
                    <h2>{ele.brand}</h2>
                    <figure  onClick={()=>Handlenavigateoffers(ele.id)}>
                        <img src={ele.images[0]}/>
                        
                    </figure>
                    <a  onClick={()=>Handlenavigateoffers(ele.id)}>see more</a>
                </div>

                )
            })}
        </div>


     




<div className="wrapp">
        <div className="opaa">

        {/* <button onClick={rame}> awrgawrgrewg </button> */}
       
        <button onClick={()=>sliderRef1.current.slickPrev()}>{"<"}</button>
        <Slider {...settings} ref={sliderRef1} >
          
            
            {offers.map((ele)=>{
                return(
                    <div className="insideslideroffer" key={ele.id}>
                        <div className="inside" >

                       
                    <figure >
                         <img  key={ele.id} src={ele.image}/>
                    </figure>
                        <div>
                            <p className="axali">{ele.newPrice}$</p>
                            <p>{ele.oldPrice}$</p>

                        </div>
                    </div>
                    </div>
                   
                )

            })
           
        }
         
        </Slider>
        <button onClick={()=>sliderRef1.current.slickNext()}>{">"}</button>
        </div>

        <div className="opaa">


<button onClick={()=>sliderRef2.current.slickPrev()}>{"<"}</button>
<Slider {...settings} ref={sliderRef2} >
  
    
    {mostdemand.map((ele)=>{
        return(
            <div className="insideslideroffer" key={ele.id}>
                <div className="inside">

               
            <figure onClick={()=>Handlenavigateoffers(ele.id)}>
                 <img key={ele.id} src={ele.images[0]}/>
            </figure>
            </div>
            </div>
           
        )

    })
   
}
 
</Slider>
<button onClick={()=>sliderRef2.current.slickNext()}>{">"}</button>


</div>


<div className="opaa">



<button onClick={()=>sliderRef3.current.slickPrev()}>{"<"}</button>
<Slider {...settings} ref={sliderRef3} >
  
    
    {latestproduct.map((ele)=>{
        return(
            <div className="insideslideroffer" key={ele.id}>
                <div className="inside">

               
            <figure  onClick={()=>Handlenavigateoffers(ele.id)}>
                 <img key={ele.id} src={ele.image}/>
            </figure>
           
           
            </div>
            </div>
           
        )

    })
   
}
 
</Slider>
<button onClick={()=>sliderRef3.current.slickNext()}>{">"}</button>
</div>
</div>
        </Styleddiv>

        
    
  


        

        
    )
}