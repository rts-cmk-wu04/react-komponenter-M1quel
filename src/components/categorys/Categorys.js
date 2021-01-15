import Category from "./Category";
import React, { useEffect, useState } from "react";
import "./Categorys.css"

function Categorys () {
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

    return(
        <section className="categorys">
            <Category
                color={data.newsCategorys && data.newsCategorys[0].color}
                img={data.newsCategorys && data.newsCategorys[0].img}
                heading={data.newsCategorys && data.newsCategorys[0].heading}
                para={data.newsCategorys && data.newsCategorys[0].para}
            />
            <Category
                color={data.newsCategorys && data.newsCategorys[1].color}
                img={data.newsCategorys && data.newsCategorys[1].img}
                heading={data.newsCategorys && data.newsCategorys[1].heading}
                para={data.newsCategorys && data.newsCategorys[1].para}
            />
        </section>
    )
}


export default Categorys;