import "./component.css"

function Add3({add ,minus,multiply}){
    return(
        <div>
        <button onClick={add}>ADD</button>
        <button onClick={minus}>Subtract</button>
        <button onClick={multiply}>Multiply</button>
        </div>
        
    )
}
export default Add3

