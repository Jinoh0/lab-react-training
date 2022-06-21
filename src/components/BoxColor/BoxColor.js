export function BoxColor (props){
    const box = {backgroundColor: `rgb(${props.r} , ${props.g} , ${props.b})`}

    return (
        <div style={box}> rgb({props.r}, {props.g}, {props.b}) </div>
    )
}

