import React, { useEffect, useState } from "react";
import "./Travel.css"
function Travel() {

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
		<article className="travel">
            <div className="travelImgWrapper">
                <img className="travelImg" src={ data.travel && data.travel.img } alt=""/>
            </div>
            <div className="travelMainContent">
                <p className="travelSubHeading">{data.travel && data.travel.subHeading}</p>
                <h1 className="travelHeading">{data.travel && data.travel.heading}</h1>
                <p className="travelPara">{data.travel && data.travel.para}</p>
            </div>
        </article>
	);
}

export default Travel;