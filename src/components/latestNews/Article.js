import "./Article.css"


function Article (props) {
    var styling = {
        color: props.color 
    }

    return (
        <div className="newsArticleWrapper">
            <img src={props.img} alt=""/>
            <div>
                <h1 style={ styling } className="newsArticleHeading">{ props.heading }</h1>
                <p className="newsArticleDesc">{ props.para }</p>
            </div>
        </div>
    );
}

export default Article;