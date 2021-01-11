import React, { useEffect, useState } from "react";
import "./experience.css"

function Experience () {
    var [data, setData] = useState({});

	useEffect(function() {
		fetch("data.json")
			.then(function(response) {
				return response.json();
            })
            .then(data => {
                setData(data)
            })
	}, []);

    
    return (
        <article className="experienceWrapper">
            <div className="experienceInnerWrapper">
                <p className="experienceLeisure">Leisure</p>
                <div className="imgWrapper">
                    <img src={ data.experience && data.experience.img } alt=""/>
                </div>
                <section className="experienceContentWrapper">
                    <h1 className="experienceHeading">{data.experience && data.experience.heading}</h1>
                    <p className="experiencePara">{ data.experience && data.experience.para }</p>
                    <div className="imgGallery">
                        <img src={ data.experience && data.experience.imgGallery && data.experience.imgGallery.img1 } alt=""/>
                        <img src={ data.experience && data.experience.imgGallery && data.experience.imgGallery.img2 } alt=""/>
                        <img src={ data.experience && data.experience.imgGallery && data.experience.imgGallery.img3 } alt=""/>
                    </div>
                </section>
            </div>
        </article>
    )
}


export default Experience;