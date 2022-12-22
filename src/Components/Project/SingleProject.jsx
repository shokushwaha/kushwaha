import React from 'react'

export default function SingleProject({ name, img, tech, url }) {
    return (
        <>
            <div className="pro">
                <img src={img} alt="Pic1" />
                <div className="info">
                    <span>{name}</span>
                    <p>Tech : {tech}  </p>
                    <a href={url} target='_blank' >Visit</a></div>


            </div>




        </>
    )
}
