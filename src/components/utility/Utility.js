import "./utility.css"

function Utility (props) {
    var styling = {
        "backgroundColor": props.bgColor,
    }
    
    return (
        <div style={styling} className="wrapper">
            <img className="utilityImg" src={props.img} alt=""/>
            <div className="content">
                <h1 className="utilityHeading">{ props.heading }</h1>
                <p className="utilityPara">{ props.para }</p>
            </div>
        </div>
        )
}


export default Utility;