import "./Category.css"

function Category(props) {
    var styling = {
        color: props.color 
    }
    
    return (
        <article className="category">
            <div className="categoryImgWrapper">
                <img src={ props.img } alt=""/>
            </div>
            <div className="categoryMain">
                <h1 style={ styling } className="categoryHeading">{ props.heading }</h1>
                <p className="categoryPara">{ props.para }</p>
            </div>
        </article>
    )
}

export default Category;