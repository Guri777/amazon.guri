import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { handleCategoreValue } from "./categoriesslice"
import { getproducts } from "../../fetch/getproducts"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';
import { forpagination } from "../../fetch/forpagination"

const Styleddivforarticle = styled.div`
width:100%;
display:flex;
gap:32px;
background-color:lightgray;
justify-content:center;
flex-wrap:wrap;

& .forform{
    width: 5%;
    display:flex;
    gap:10px;
    flex-direction:column;
    align-items:center;
    margin-top:30px;
    margin-bottom:30px;
    & button{
        width:50%;
        background-color:orange;
        box-sizing:border-box;
        border-radius:8px;
        &:hover{
            cursor:pointer;
        }
    }
    & input{
        width:100%;
        box-sizing:border-box;
        border-radius:4px;
    }
}

& .checkboxes{
    width:3%;
    display:flex;
    flex-direction:column;
    gap:15px;
    margin-top:30px;
    margin-bottom:30px;
    & label{
        width:100%;
        display:flex;
        flex-wrap:wrap;
        & input{
            width:100%;
            display:flex;
            flex-wrap:wrap;
        }
    }
 

}


`

const Styledarticle = styled.article`

width: 380px;
display:flex;
gap:20px;
flex-direction:column;
box-sizing:border-box;
margin-bottom: 30px;
margin-top: 30px;
margin-left: 30px;
background-color:white;



    & img{
        width:100%;
        object-fit:fill;
        aspect-ratio:3/2;
        object-fit:contain;
        cursor: pointer;
    }

& p{
    font-size:18px;
    color:red;
}

`




  

export const Categories = ()=>{

    const categoryvalue = useSelector((state)=>state.categories.value)

    const dispatch = useDispatch()
    const categoryparams = useParams()

    const push = useNavigate()


    const [pricefilter,setPricefilter] = useState({PriceFrom:"",PriceTo:""})

    const [selected,setSelected] = useState("")
   

    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
      setPage(value);
    }

    useEffect(()=>{
        
        forpagination({query:`CategoryId=${categoryparams.id}&PageNumber=${page}&PageSize=5`}).then((res)=>{
            dispatch(handleCategoreValue(res.data))
           
        })
        
       
        
    },[page,categoryparams.id])


    const handlefilterpriceinput = (e)=>{

        const {name,value} = e.target

        setPricefilter((prev)=>({...prev,[name]:value}))
        console.log(value)
    }

    const handlebrand = (e)=>{
        const {name,value} = e.target
        // setSelected((prev)=>({...prev,[name]:value}))
        setSelected(selected===value?"":value)
        forpagination({query:`CategoryId=${categoryparams.id}&PriceFrom=${pricefilter.PriceFrom}&PriceTo=${pricefilter.PriceTo}&BrandName=${!selected?value:""}&PageNumber=${page}&PageSize=5`}).then((res)=>{
            dispatch(handleCategoreValue(res.data))
           
        })

    }

    useEffect(()=> {
        if (selected) {
            setSelected(selected)
        } else {
            setSelected("")
        }
    }, [selected])

    const handleform = (e)=>{
        e.preventDefault()

        forpagination({query:`CategoryId=${categoryparams.id}&PriceFrom=${pricefilter.PriceFrom}&PriceTo=${pricefilter.PriceTo}&PageNumber=${page}&PageSize=5`}).then((res)=>{
            dispatch(handleCategoreValue(res.data))
           
        })
        


    }
    
   
    const handlenavigate = (id)=>{
        push(`/${id}`)
        document.documentElement.scrollTop = 0;
    }

    const unique = [...new Set(categoryvalue.map((ele)=>ele.brand))]

    return(
        <>
        
        <Styleddivforarticle>
            <form onSubmit={handleform} className="forform">
            <label id="Pricefrom">price from</label>
            <input id="Pricefrom" placeholder="$ Min" name="PriceFrom" onChange={handlefilterpriceinput} value={pricefilter.PriceFrom} type="number"/>

            <label id="Priceto">price to</label>
            <input id="Priceto"  placeholder="$ Max" name="PriceTo" onChange={handlefilterpriceinput} value={pricefilter.PriceTo} type="number"/>

            <button>go</button>
            </form>

            <div className="checkboxes">
                {unique.map((ele,index)=>{
                    return(
                    <label key={index}>
                        <input 
                        id={ele}
                        type="checkbox"
                        name={ele}
                        value={ele}
                        checked={selected===ele}
                        onChange={handlebrand}

                        />
                        {ele}
                    </label>
                    )
                    
                })}
            </div>
       

            { categoryvalue.map((ele)=>{
                if(ele.categoryId==categoryparams.id){
                    return(
                        <Styledarticle key={ele.id}>
                    <img src={ele.images[0]} onClick={()=>handlenavigate(ele.id)}/>
                    <h2>{ele.brand}</h2>
                    
                    <p>{ele.price} $</p>

                </Styledarticle>
                    )
                    


                }
                
            }) }


        
        </Styleddivforarticle>

        <Box spacing={2}>
     
     <Pagination count={20} page={page} color="primary" onChange={handleChange} sx={{display:"flex",justifyContent:"center"}}/>
     
     
   </Box>
        </>
    )
}