import React from 'react'

export default function SingleProject({ name, img, tech, url, giturl }) {
    return (
        <>
            <div className="pro">
                <img src={img} alt="Pic1" />
                <div className="info">
                    <span>{name}</span>
                    <p>Tech : {tech}  </p>
                    <div className="x">

                        {url.length > 0 ?
                            <a href={url} target='_blank' >Live Demo</a> : undefined}
                        {giturl.length > 0 ?
                            <a href={giturl} target='_blank' >Github Repo</a> : undefined}
                    </div>
                </div>

            </div>




        </>
    )
}
