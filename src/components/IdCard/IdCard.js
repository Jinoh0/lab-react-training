export function IdCard (props) {
    return (
        <>        
            <div>{props.lastName}</div>
            <div>{props.firstName}</div>
            <div>{props.gender}</div>
            <div>{props.height}</div>
            {/* <div>{props.["birth"]}</div> */}
            {/* console.log(props.birth) */}
            <img src={props.picture} alt="face" />
        </>
)
}