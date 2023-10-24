import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { forpagination } from "../../fetch/forpagination"
import { addtolivesearch } from "./livesearchslice"
import styled from "styled-components"
import search from "./../../assets/search-logo.svg"
import { Link } from "react-router-dom"

const Styledsearch = styled.div`
form{
    width: 800px;
    display: flex;
    align-items: center;
    position:relative;
    & input{
        width:95%;
        height:38px;

    }
    & button{
        width:5%;
        height: 40px;
        background-color:#febd69;
        border: none;
        display: flex;
        align-items: center;
        justify-content:center;
        & img{
            width: 100%;
            object-fit:fill;
            object-fit:contain;
            mix-blend-mode:darken;
           

        }
    }
   
}

& .forsearch{
    width:800px;
    position:absolute;
    top:52px;
    
    background-color:white;
    z-index:1;
    & ul{
        list-style:none;
        display:flex;
        flex-direction:column;
        padding-left:10px;
        box-sizing:border-box;
        & a{
            text-decoration:none;
            & li{
                color:black;
                &:hover{
                    cursor:pointer;
                    background-color:lightgray;
                }
            }
        }
    }

}
}

`

const StyledDark = styled.div`
    position: fixed;
    opacity: 50%;
    top: 0;
    left: 0;
    background-color: black;
    width: 100vw;
    height: 100vh;
`

export const Livesearch = ()=>{

    const livesearch = useSelector((state)=>state.livesearch.value)
    const dispatch = useDispatch()

    const [searchvalue,setSearchvalue] = useState("")

    const [ filtered, setFiltered] = useState([])

    useEffect(()=>{
        forpagination({query:`PageSize=20`}).then((res)=>{
                dispatch(addtolivesearch(res.data))
        })
    },[dispatch])

    const handlechange = (e)=>{
        const searchvalue = e.target.value
        setSearchvalue(searchvalue)

        const filteredsearch = livesearch.filter((product)=>product.name.toLowerCase().includes(searchvalue.toLowerCase()))

        const fited = filteredsearch.map((ele)=>({
        id:ele.id,
        name:ele.name.length>25?`${ele.name.slice(0,25)}...`:ele.name
    })
    
    
    )
    setFiltered(fited)
    
    
}

    const handlesubmit = (e)=>{
        e.preventDefault()
    }

    
    const handleDarkBackground = () => {
        setFiltered([]);
        setSearchvalue("");
    }

    return(
        <Styledsearch>
        { searchvalue && <StyledDark onClick={handleDarkBackground}/>}
             <form onSubmit={handlesubmit}>
                   
                    <input 
                        type="text"
                        name="search"
                        onChange={handlechange}
                        value={searchvalue}

                    />
                <button>
                    <img src={search}/>
                </button>
            </form>
            { searchvalue && (
                <div className="forsearch">
                <ul>
                    {filtered.map((ele)=>{
                        return(
                            <Link to={`/${ele.id}`}>
                            <li>
                                {ele.name}
                            </li>
                            </Link>
                        )
                    })}

                </ul>
                </div>
            )}
        </Styledsearch>
    )
}