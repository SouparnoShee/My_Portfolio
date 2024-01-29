import React from 'react'
import "./styles.scss"

const Card = ({ icon, name, desc, link, butt, disable }) => {
    return (
        <div className="p-card">
            <i className={`${icon} p-icon`}></i>
            <h4 className='p-name'>&lt;{name}&#47;&gt;</h4>
            <p className='p-description'>{desc}</p>
            <a href={link} className="p-button" style={{ pointerEvents: disable }}>{!butt ? "See Projects" : butt}</a>
        </div>
    )
}

export default Card
