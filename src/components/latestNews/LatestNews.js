import Article from "./Article";
import React, { useEffect, useState } from "react";
import "./LatestNews.css"

function LatestNews () {
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
        <section className="latestNews">
            <header className="latestNewsHeader">
                <h1>Latest news</h1>
            </header>
            <section className="latestNewsWrapper">
                <Article
                color={data.latestNews && data.latestNews.news && data.latestNews.news.nature && data.latestNews.news.nature.headingColor}
                img={data.latestNews && data.latestNews.news && data.latestNews.news.nature && data.latestNews.news.nature.img}
                heading={data.latestNews && data.latestNews.news && data.latestNews.news.nature && data.latestNews.news.nature.heading}
                para={data.latestNews && data.latestNews.news && data.latestNews.news.nature && data.latestNews.news.nature.para}
                />
                <Article
                color={data.latestNews && data.latestNews.news && data.latestNews.news.nature && data.latestNews.news.animalKingdom.headingColor}
                img={data.latestNews && data.latestNews.news && data.latestNews.news.animalKingdom && data.latestNews.news.animalKingdom.img}
                heading={data.latestNews && data.latestNews.news && data.latestNews.news.animalKingdom && data.latestNews.news.animalKingdom.heading}
                para={data.latestNews && data.latestNews.news && data.latestNews.news.animalKingdom && data.latestNews.news.animalKingdom.para}
                />
                <Article
                color={data.latestNews && data.latestNews.news && data.latestNews.news.nature && data.latestNews.news.technology.headingColor}
                img={data.latestNews && data.latestNews.news && data.latestNews.news.technology && data.latestNews.news.technology.img}
                heading={data.latestNews && data.latestNews.news && data.latestNews.news.technology && data.latestNews.news.technology.heading}
                para={data.latestNews && data.latestNews.news && data.latestNews.news.technology && data.latestNews.news.technology.para}
                />
                <Article
                color={data.latestNews && data.latestNews.news && data.latestNews.news.nature && data.latestNews.news.explore.headingColor}
                img={data.latestNews && data.latestNews.news && data.latestNews.news.explore && data.latestNews.news.explore.img}
                heading={data.latestNews && data.latestNews.news && data.latestNews.news.explore && data.latestNews.news.explore.heading}
                para={data.latestNews && data.latestNews.news && data.latestNews.news.explore && data.latestNews.news.explore.para}
                />
                <Article
                color={data.latestNews && data.latestNews.news && data.latestNews.news.nature && data.latestNews.news.africaZoo.headingColor}
                img={data.latestNews && data.latestNews.news && data.latestNews.news.africaZoo && data.latestNews.news.africaZoo.img}
                heading={data.latestNews && data.latestNews.news && data.latestNews.news.africaZoo && data.latestNews.news.africaZoo.heading}
                para={data.latestNews && data.latestNews.news && data.latestNews.news.africaZoo && data.latestNews.news.africaZoo.para}
                />
            </section>
            <footer className="latestNewsFooter">
                <h2>More News</h2>
            </footer>
        </section>
    )
}


export default LatestNews;