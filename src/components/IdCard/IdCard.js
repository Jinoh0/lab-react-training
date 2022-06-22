import style from "./idcard.module.css"

export function IdCard (props) {    
    return (
        <div className={style.IdCard}>   
            <img className={style.imge} src={props.picture} alt="face" />

            <div className={style.text}>            
            <div><strong>First name:</strong> {props.firstName}</div>
            <div><strong>Last name:</strong> {props.lastName}</div> 
            <div><strong>Gender:</strong> {props.gender}</div>
            <div><strong>Height:</strong> {props.height}</div>
            {/* <div>{props.["birth"]}</div> */}
            {/* console.log(props.birth) */}
            </div>
            

        </div>
)
}


//COMO COLOCA GAP ENTRE????