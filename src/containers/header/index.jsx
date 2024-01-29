import React, { useState } from 'react'
import "./styles.scss"
import portfolio_logo from "../../assets/portfolio_logo.png"
import { Link } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

const index = () => {

    const [ham, setHam] = useState(false)




    return (
        <>
            <div className='header'>
                <div className="logo">
                    <Link to={"/"}>
                        <img src={portfolio_logo} alt="" />
                    </Link>
                </div>

                <div className='ham-header'>
                    {
                        !ham ? <div onClick={() => setHam(true)}>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div> : <div className="ham-close" onClick={() => setHam(false)}>
                            <div className="cross-line"></div>
                            <div className="cross-line"></div>
                        </div>
                    }


                </div>
                <div className='ham'>
                    <LinkScroll to='c-scroll' spy={true} smooth={true} offset={50} duration={500} className='ham-query' >Want A Website? </LinkScroll>
                    <Link to={"/projects"} className='p-butt'>Projects</Link>
                </div>


            </div>
            {
                ham ? <div className="ham-collapse">
                    <LinkScroll onClick={() => setHam(false)} to='c-scroll' spy={true} smooth={true} offset={50} duration={500} className='ham-query'>Want A Website?</LinkScroll>
                    <Link onClick={() => setHam(false)} to={"/projects"} className='p-butt'>Projects</Link>
                </div> : null
            }

        </>
    )
}

export default index
