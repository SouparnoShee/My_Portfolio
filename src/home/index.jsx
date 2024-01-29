import React, { useState } from 'react'
import "./styles.scss"
import { motion } from "framer-motion"
import Card from '../containers/cards'
import SelfCard from '../containers/self-card'
import { ProjectData, dlists, selfCard } from '../data/data'
import me from "../assets/me.png"
import { Link } from 'react-router-dom'
import axios from 'axios'
import { server } from '../main'
import cv from "../../public/cv/SOUPARNO_CV.pdf"


const index = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [messages, setMessages] = useState('')
    const [submitted, setSubmitted] = useState(false)



    const submitHandler = async (e) => {
        e.preventDefault();
        try {

            const { data } = await axios.post(`${server}/api/email`, {
                name,
                email,
                messages
            }, {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json"
                },
            })
            setEmail("")
            setMessages("")
            setName("")
            alert(data.message)
            setSubmitted(true)
            setTimeout(() => {
                setSubmitted(false)
            }, 10000)




        } catch (error) {
            toast.error("Somthing Went Wrong")
        }

    }

    return (
        <div className='home'>
            <div className="hero">
                <div className="left">
                    <motion.h1
                        className='heading'
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        &lt;Hello I am A Web Developer <br /> And Designer &#47;&gt;
                    </motion.h1>

                    <motion.p
                        className='description'
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        I design and code web applications, specialized at reactJs, NodeJs, Mongodb, tailwindCss, SASS and many more, ove the years I have built many projects and worked in startups where I code industry level applications. scroll to know more.
                    </motion.p>
                    <motion.button
                        className='cv-butt'
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5 }}
                    >

                        <a href="/public/cv/SOUPARNO_CV.pdf" target="_blank" download="CV.pdf">
                            My Resume
                        </a>
                    </motion.button>
                </div>
                <div className="right">
                    <motion.div
                        className='right-div'
                        initial={{ opacity: 0, scale: 0.2 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >

                        <a href="https://www.instagram.com/codeknight._/"><motion.i whileHover={{ scale: 1.4, rotate: 360 }} className="fa-brands fa-instagram social-icon"></motion.i></a>
                        <a href="https://github.com/SouparnoShee">
                            <motion.i whileHover={{ scale: 1.4, rotate: 360 }} class="fa-brands fa-github social-icon"></motion.i>
                        </a>
                        <a href="https://twitter.com/devSoparno_">
                            <motion.i whileHover={{ scale: 1.4, rotate: 360 }} class="fa-brands fa-twitter social-icon"></motion.i>
                        </a>
                    </motion.div>
                </div>
                <motion.div initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, repeat: Infinity }} className="down">
                    <i class="fa-solid fa-angles-down scroll-ico"></i>
                </motion.div>
            </div>
            <div className="projects">
                <h1 className='project-head'> &lt;PROJECTS &#47;&gt;</h1>
                <motion.div initial={{ opacity: 0, x: 90, scale: 0.2 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.9 }} className="project-container">
                    {
                        ProjectData.slice(0, 4).map((e) => {
                            return (
                                <Card
                                    icon={e.icon}
                                    name={e.name}
                                    desc={e.desc}
                                    link={e.link}
                                />
                            )
                        })
                    }
                </motion.div>
                <Link to={"/projects"} className='p-butt'>More Projects</Link>
            </div>
            <div className="about">
                <h1 className='about-heading'>&lt;About Me &#47;&gt;</h1>
                <div className="about-info-section">
                    <motion.img
                        initial={{ opacity: 0, x: 90, scale: 0.2 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.9 }}
                        className='my-image' src={me} alt=""
                    />
                    <motion.p
                        className="description"
                        initial={{ opacity: 0, x: 90, scale: 0.2 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.9 }}

                    >
                        Enthusiastic self taught front end developer with vast knowledge in web products and designing. Specialized in HTML, CSS, Javascript, ReactJs, nodeJS etc. Helped people to build their online presence using different front end technologies and designing skills and now in search for bigger opportunities Passionate about work, hardworking and love to explore.
                    </motion.p>
                </div>
                <motion.div initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, repeat: Infinity }} className="down">
                    <i class="fa-solid fa-angles-down scroll-ico"></i>
                </motion.div>
            </div>
            <div className="skills">
                <h1 className='skillhead'>&lt;Skills And Experience&#47;&gt;</h1>
                <motion.div initial={{ opacity: 0, x: 90, scale: 0.2 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.9 }} className="skill-list">
                    {
                        selfCard.map((e) => {
                            return (
                                <SelfCard
                                    link={e.link}
                                    title={e.title}
                                    text1={e.text1}
                                    text2={e.text2}
                                    list={e.lists.map((e) => {
                                        return (
                                            <li>{e}</li>
                                        )
                                    })} />
                            )
                        })
                    }


                </motion.div>
            </div>
            <div className="contact" id='c-scroll'>
                <h1 className='contact-head'>&lt;Get In Touch&#47;&gt;</h1>
                {
                    submitted ? <div className="form-section submitted">
                        <i className="fa-solid fa-circle-check check"></i>
                        <h1 className='submit-text'>Submitted, Thank You</h1>
                    </div> : <div className="form-section">
                        <form className='form' onSubmit={submitHandler}>
                            <input
                                type="text"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)} placeholder='Enter your Name'
                            />
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email'
                            />
                            <textarea
                                type="text"
                                required
                                value={messages}
                                onChange={(e) => setMessages(e.target.value)} placeholder='Enter Your Message'
                            />
                            <button>Submit</button>
                        </form>
                    </div>
                }


            </div>
        </div >
    )
}

export default index
