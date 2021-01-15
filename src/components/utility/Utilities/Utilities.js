import Utility from "../Utility";
import React, { useEffect, useState } from "react";
import "./Utilities.css"

function Utilities () {
    var [data, setData] = useState({});

	useEffect(function() {
		fetch("data.json")
			.then(function(response) {
				return response.json();
			})
			.then(function(data) {
				setData(data);
			});
	}, []);
    
    return (
        <section className="utilitysWrapper">
            <Utility
                img={data.utility && data.utility.delevery && data.utility.delevery.img}
                heading={data.utility && data.utility.delevery && data.utility.delevery.heading}
                para={data.utility && data.utility.delevery && data.utility.delevery.para}
                bgColor="#005AEE"
            />

            <Utility
                img={data.utility && data.utility.parcels && data.utility.parcels.img}
                heading={data.utility && data.utility.parcels && data.utility.parcels.heading}
                para={data.utility && data.utility.parcels && data.utility.parcels.para}
                bgColor="#FFA767"
            />

            <Utility
                img={data.utility && data.utility.qualityCheck && data.utility.qualityCheck.img}
                heading={data.utility && data.utility.qualityCheck && data.utility.qualityCheck.heading}
                para={data.utility && data.utility.qualityCheck && data.utility.qualityCheck.para}
                bgColor="#0AACDC"
            />

            <Utility
                img={data.utility && data.utility.customerService && data.utility.customerService.img}
                heading={data.utility && data.utility.customerService && data.utility.customerService.heading}
                para={data.utility && data.utility.customerService && data.utility.customerService.para}
                bgColor="#597AEF"
            />
        </section>
    )
}


export default Utilities;