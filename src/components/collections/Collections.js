import Collection from "./Collection"
import React, { useEffect, useState } from "react";

function Collections() {
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
        <>
        <Collection
        collectionNum = {data.collections && data.collections[0].collectionNum}
        headerImg = {data.collections && data.collections[0].headerImg}
        profileImg = {data.collections && data.collections[0].profileImg}
        heading = {data.collections && data.collections[0].heading}
        user = {data.collections && data.collections[0].user}
        />
        <Collection
        collectionNum = {data.collections && data.collections[1].collectionNum}
        headerImg = {data.collections && data.collections[1].headerImg}
        profileImg = {data.collections && data.collections[1].profileImg}
        heading = {data.collections && data.collections[1].heading}
        user = {data.collections && data.collections[1].user}
        />
        <Collection
        collectionNum = {data.collections && data.collections[2].collectionNum}
        headerImg = {data.collections && data.collections[2].headerImg}
        profileImg = {data.collections && data.collections[2].profileImg}
        heading = {data.collections && data.collections[2].heading}
        user = {data.collections && data.collections[2].user}
        />
        </>
    )
}

export default Collections;