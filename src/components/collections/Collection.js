import "./Collection.css"

function Collection (props) {
 return ( 
     <article className="collection">
         <header className="collectionHeader">
             <h3 className="collectionName">Collection { props.collectionNum }</h3>
             <img src={ props.headerImg } alt=""/>
         </header>
         <section className="collectionMain">
             <div className="profileImgWrapper">
                <img className="profileImg" src={props.profileImg} alt=""/>
             </div>
             <h2 className="collectionHeading">{props.heading}</h2>
             <p className="collectionByLine">By: {props.user}</p>
         </section>
     </article>
 )
}


export default Collection;