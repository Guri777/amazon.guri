import styled from "styled-components"
import footeramazon from "./../../assets/footeramazon.png"
import flag from "./../../assets/drosha.png"
import { useNavigate } from "react-router-dom"

const Styledfooter = styled.footer`

    width:100%;
    height:54rem;
    // must be auto
    color:white;
    background-color:#232f3e;
    & .scroll {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 49px;
        background-color: #131a22;
        &:hover {
            cursor:pointer;
                background-color: #37475a;

            
        }
    }
    & .pirveli{
        padding-top: 12px;
        width:100%;
        height:45%;
        display:flex;
        align-items:center;
        justify-content: center;
        font-size: 16px;
        & nav{
            width:18%;
            display:flex;
            align-self: baseline;
            & ul {
                display: flex;
                flex-direction: column;
                gap: 12px;
                list-style: none;
                & .first-heading {
                    font-weight: 600;
                }
                & li a {
                    color: white;
                    text-decoration: none;
                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }
    }
    .shua {
        width: 100%;
        height: 80px;
        border-top: 1px solid gray;
        display: flex;
        justify-content: center;
        align-items: center;
        gap:30px;

        & .forfooteramazon{
            width:8%;
            display:flex;
           
            & figure{
                width:70%;
                &:hover{
                    cursor:pointer;
                }
                & img{
                    width:100%;
                    object-fit:fill;
                    object-fit:contain;
                }
            }

        }

        & .fordollar{
            width:9%;
            height:41px;
            display:flex;
            box-sizing:border-box;
            border-radius:3px;
            border:1px solid white;
            justify-content:center;
            align-items:center;
            gap:4px;
            &:hover{
                cursor:pointer;
            }
            & p{
                font-size:14px;
            }

        }

        

        & .forflag{
            width:8%;
            display:flex;
            box-sizing:border-box;
            border-radius:3px;
            border:1px solid white;
            justify-content:center;
            align-items:center;
            gap:4px;
            &:hover{
                cursor:pointer;
            }
            & figure{
                width:30%;
                & img{
                    width:100%;
                    object-fit:fill;
                    object-fit:contain;
                }
            }

        }
    }
    .qvemot {
        width: 100%;
        height: 50%;
        background-color: #131a22;
        display:flex;
        justify-content: center;
        align-items:center;
        
        gap:29px;
        & .outside{
            width:10%;
            height: 100%;
            display:flex;
            flex-direction:column;
            justify-content: center;
            
            gap:10px;
            margin-bottom:30px;
            margin-top:30px;
            & .inside{
                width:100%;
                height: 25%;
                display:flex;
                justify-content: center;
               
                flex-direction:column;
                & .first{
                    color: white;
                    text-decoration: none;
                    &:hover {
                        text-decoration: underline;
                    }

                }

                & .second{
                    color: lightgray;
                    text-decoration: none;
                    &:hover {
                        text-decoration: underline;
                    }

                }
    
            }

        }
       
           
    }


`

export const Footer=()=>{

    const push = useNavigate()

    const scrolltotop = ()=>{
        document.documentElement.scrollTop = 0;
    }

    const handleNavigateOnFooteramazon = ()=>{
        push("/")
        scrolltotop()
    }

    return(
        <Styledfooter>
        <div className="scroll"  id="myBtn" onClick={scrolltotop}>
            Scroll to Top
        </div>
        <div className="pirveli">
            <nav>
                <ul>
                    <span className="first-heading">Get to know us</span>
                    <li><a href="/">Careers</a></li>
                    <li><a href="/">blog</a></li>
                    <li><a href="/">about amazon</a></li>
                    <li><a href="/">investor relations</a></li>
                    <li><a href="/">amazon devices</a></li>
                    <li><a href="/">amazon science</a></li>

                </ul>
            </nav>

            <nav>
                <ul>
                <span className="first-heading">Make money with us</span>
                <li><a href="/">sell products on amazon</a></li>
                <li><a href="/">sell on amazon business</a></li>
                <li><a href="/">sell apps on amazon</a></li>
                <li><a href="/">become an affiliate</a></li>
                <li><a href="/">advertise your products</a></li>
                <li><a href="/">self-publish with us</a></li>
                <li><a href="/">host an  amazon hub</a></li>
                <li><a href="/">see more make money with us</a></li>
                </ul>
            </nav>

            <nav>
                <ul>
                <span className="first-heading">amazon payment products</span>
                <li><a href="/">amazon business card</a></li>
                <li><a href="/">shop with points</a></li>
                <li><a href="/">reload your balance</a></li>
                <li><a href="/">amazon currency  converter</a></li>
                </ul>
            </nav>

            <nav>
                <ul>
                    <span className="first-heading">let us help you</span>
                <li><a href="/">amazon and COVID-19</a></li>
                <li><a href="/">your account</a></li>
                <li><a href="/">your orders</a></li>
                <li><a href="/">shipping rates & policies</a></li>
                <li><a href="/">returns & replacements</a></li>
                <li><a href="/">manage your content and devices</a></li>
                <li><a href="/">amazon assistant</a></li>
                <li>help</li>

                </ul>
            </nav>

        </div>
        <div className="shua">
            
            
            
            
           <div className="forfooteramazon">
            <figure onClick={handleNavigateOnFooteramazon}>
                <img src={footeramazon}/>
            </figure>
           </div>

           

           <div className="fordollar">
                $
                <p>USD - U.S. Dollar</p>
           </div>
        
        <div className="forflag">
            <figure>
                <img src={flag}/>
            </figure>
            <p>united states</p>

        </div>
        
        
        
        
        </div>
        <div className="qvemot">
            <div className="outside">
                <div className="inside">
                <a href="/" className="first">Amazon Music</a>
                <a href="/" className="second">Stream millions of songs</a>
                </div>

                <div className="inside">
                <a href="/" className="first">Amp</a>
                <a href="/" className="second">Host your own live radio show with music you love</a>
                </div>

                <div className="inside">
                <a href="/" className="first">IMDB</a>
                <a href="/" className="second"> Movies, TV & Celebrities</a>
                </div >

                <div className="inside">
                <a href="/" className="first">Ring</a>
                <a href="/" className="second">Smart Home Security Systems</a>
                </div>
               
            </div>

            <div className="outside">
            <div className="inside">
                <a href="/" className="first">Amazon Advertising</a>
                <a href="/" className="second">Find, attract, and engage customers</a>
                </div>

                <div className="inside">
                <a href="/" className="first">AmazonGlobal</a>
                <a href="/" className="second">Ship Orders Internationally</a>
                </div>

                <div className="inside">
                <a href="/" className="first">IMDbPro</a>
                <a href="/" className="second">Get Info Entertainment Professionals Need</a>
                </div >

                <div className="inside">
                <a href="/" className="first">eero WiFi</a>
                <a href="/" className="second">Stream 4K Video in Every Room</a>
                </div>
            </div>

            <div className="outside">
            <div className="inside">
                <a href="/" className="first">Amazon Music</a>
                <a href="/" className="second">Stream millions of songs</a>
                </div>

                <div className="inside">
                <a href="/" className="first">Amp</a>
                <a href="/" className="second">Host your own live radio show with music you love</a>
                </div>

                <div className="inside">
                <a href="/" className="first">IMDB</a>
                <a href="/" className="second"> Movies, TV & Celebrities</a>
                </div >

                <div className="inside">
                <a href="/" className="first">Ring</a>
                <a href="/" className="second">Smart Home Security Systems</a>
                </div>
            </div>

            <div className="outside">
            <div className="inside">
                <a href="/" className="first">Amazon Music</a>
                <a href="/" className="second">Stream millions of songs</a>
                </div>

                <div className="inside">
                <a href="/" className="first">Amp</a>
                <a href="/" className="second">Host your own live radio show with music you love</a>
                </div>

                <div className="inside">
                <a href="/" className="first">IMDB</a>
                <a href="/" className="second"> Movies, TV & Celebrities</a>
                </div >

                <div className="inside">
                <a href="/" className="first">Ring</a>
                <a href="/" className="second">Smart Home Security Systems</a>
                </div>
            </div>

            <div className="outside">
            <div className="inside">
                <a href="/" className="first">Amazon Music</a>
                <a href="/" className="second">Stream millions of songs</a>
                </div>

                <div className="inside">
                <a href="/" className="first">Amp</a>
                <a href="/" className="second">Host your own live radio show with music you love</a>
                </div>

                <div className="inside">
                <a href="/" className="first">IMDB</a>
                <a href="/" className="second"> Movies, TV & Celebrities</a>
                </div >

                <div className="inside">
                <a href="/" className="first">Ring</a>
                <a href="/" className="second">Smart Home Security Systems</a>
                </div>
            </div>

            <div className="outside">
            <div className="inside">
                <a href="/" className="first">Amazon Music</a>
                <a href="/" className="second">Stream millions of songs</a>
                </div>

                <div className="inside">
                <a href="/" className="first">Amp</a>
                <a href="/" className="second">Host your own live radio show with music you love</a>
                </div>

                <div className="inside">
                <a href="/" className="first">IMDB</a>
                <a href="/" className="second"> Movies, TV & Celebrities</a>
                </div >

                <div className="inside">
                <a href="/"  className="first">Ring</a>
                <a href="/" className="second">Smart Home Security Systems</a>
                </div>
            </div>

            <div className="outside">
            <div className="inside">
                <a href="/" className="first">Amazon Music</a>
                <a href="/" className="second">Stream millions of songs</a>
                </div>

                <div className="inside">
                <a href="/"  className="first">Amp</a>
                <a href="/" className="second">Host your own live radio show with music you love</a>
                </div>

                <div className="inside">
                <a href="/" className="first">IMDB</a>
                <a href="/" className="second"> Movies, TV & Celebrities</a>
                </div >

                
            </div>

        </div>
        </Styledfooter>
    )


}