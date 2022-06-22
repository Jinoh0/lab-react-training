import style from "./boxcolor.module.css"

export function BoxColor (props){
    const box = {backgroundColor: `rgb(${props.r} , ${props.g} , ${props.b})`}

    return (
        <div className={style.boxcolor} style={box}> rgb({props.r}, {props.g}, {props.b}) </div>
    )
}

