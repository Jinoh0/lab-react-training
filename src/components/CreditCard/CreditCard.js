export function CreditCard (props) {
    
    const bgColor = {backgroundColor:`${props.bgColor}`, color: `${props.color}`}

    
    return (
        <div style = {{bgColor}}>
            <div>{props.type}</div>
            <div>{props.number}</div>
            <div>{props.expirationMonth}</div>
            <div>{props.expirationYear}</div>
            <div>{props.bank}</div>
            <div>{props.owner}</div>           
        </div>
    )
}