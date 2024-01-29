import React from 'react'
import "./styles.scss"

const SelfCard = ({ link, title, text1, text2, list }) => {
    return (
        <div className="self-card">
            <div className="head-wrapper">
                <div className="head">
                    <i className={`${link}`}></i>
                    <h3>{title}</h3>
                </div>
            </div>
            <p className='para-one'>
                {text1}
            </p>
            <p className='para-two'>
                {text2}
            </p>
            <ul className="list-skill">
                {
                    list
                }

            </ul>
        </div>
    )
}

export default SelfCard
