export function Random (props){
    // let min = props.min
    // let max = props.max
    
    // for (let i = min ; i<max ; i++){

    // }

    let result = Math.floor(Math.random()*props.max) + props.min
    

    return (
        <div>{result}</div>
    )
        
             
}