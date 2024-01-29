import React from 'react'
import "./styles.scss"
import { ProjectData } from '../data/data'
import Card from '../containers/cards'
import { motion } from 'framer-motion'


const Projects = () => {
    return (
        <div className='project-page'>
            <h1 className='heading'>&lt;Projects&#47;&gt;</h1>
            <div className="big-projects">
                <h1 className='type-head'>Real World Solution based projects</h1>
                <motion.div initial={{ opacity: 0, x: 90, scale: 0.2 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.9 }} className="project-container">
                    {
                        ProjectData.slice(0, 6).map((e) => {
                            return (
                                <Card
                                    icon={e.icon}
                                    name={e.name}
                                    desc={e.desc}
                                    link={e.link}
                                    butt={e.butt}
                                    disable={e.disable}
                                />
                            )
                        })
                    }
                </motion.div>
            </div>
            <div className="big-projects">
                <h1 className='type-head'>Functional Small Projects</h1>
                <motion.div initial={{ opacity: 0, x: 90, scale: 0.2 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.9 }} className="project-container">
                    {
                        ProjectData.slice(6, 10).map((e) => {
                            return (
                                <Card
                                    icon={e.icon}
                                    name={e.name}
                                    desc={e.desc}
                                    link={e.link}
                                    butt={e.butt}
                                    disable={e.disable}
                                />
                            )
                        })
                    }
                </motion.div>
            </div>
        </div>
    )
}

export default Projects
