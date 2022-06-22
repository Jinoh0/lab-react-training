import style from "./drivercard.module.css"
import { Rating } from "../Rating/Rating"

export function DriverCard (props) {
    
    const carNmodel = `${props.car.model}-${props.car.licensePlate}`

    return (
        <div className={style.drivercard}>
            <img className={style.foto} src = {props.img} alt = "driver"/>

            <div className={style.txt}>
            <div><strong>{props.name}</strong></div>
            <Rating  children = {props.rating} />
            {/* <div>{props.rating}</div>             */}
            <div>{carNmodel}</div>
            </div>
        </div>
    )
}