export function DriverCard (props) {
    
    const carNmodel = `${props.car.model}-${props.car.licensePlate}`

    return (
        <>
            <div>{props.name}</div>
            <div>{props.rating}</div>
            <img src = {props.img} alt = "driver"/>
            <div>{carNmodel}</div>
        </>
    )
}