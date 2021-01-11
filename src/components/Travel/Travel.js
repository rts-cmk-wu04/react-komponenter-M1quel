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
                <img className="travelImg" src="https://via.placeholder.com/370x230" alt=""/>
            </div>
            <div className="travelMainContent">
                <p className="travelSubHeading">Travel</p>
                <h1 className="travelHeading">Surfing in Maldives</h1>
                <p className="travelPara">It’s windy. The cool breeze of the ocean. It gives, a sense of beauty, in motion. All is flowing, rushing and tide-And I sit in wonder, dreaming beside.</p>
            </div>
        </article>
	);
}

export default Travel;