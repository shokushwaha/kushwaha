import React from 'react'

export default function SingleProject({ name, img, tech, url, giturl, desc }) {
    return (
        <>
            <div className="pro">
                <img src={img} alt="Pic1" />
                <div className="info">
                    <span className='proHeading'>{name}</span>
                    <p className='proTech'>Tech : {tech}  </p>
                    <div className="desc">
                        {desc}
                    </div>


                    <div className="x">

                        {url.length > 0 ?
                            <a href={url} target='_blank'  >Live Demo</a> : undefined}
                        {giturl.length > 0 ?
                            <a href={giturl} target='_blank' >Github Repo</a> : undefined}
                    </div>

                </div>

            </div>




        </>
    )
}
