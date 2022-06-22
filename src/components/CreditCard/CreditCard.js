import style from "./creditcard.module.css"


export function CreditCard (props) {
    
    const bgColor = {backgroundColor:`${props.bgColor}`, color: `${props.color}`}

    
    return (
        <div className={style.cc} style = {{bgColor}}>
            <div className={style.visa}>{props.type}</div>
            <div className={style.number}>{props.number}</div>
            <div className={style.expire}>
            <div>Expires {props.expirationMonth}/</div>
            <div>{props.expirationYear}</div>            
            <div className={style.bankname}>{props.bank}</div>
            </div>
            <div className={style.owner}>{props.owner}</div>           
        </div>
    )
}