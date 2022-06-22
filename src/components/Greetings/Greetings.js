import style from "./greetings.module.css"


export function Greetings (props){
    if (props.lang === "de"){
        return <div className={style.greetings}> Hallo {props.children}</div>
        //jeito certo!!!!!!!!^^^^^^^^^^^
    }
    if (props.lang === "en"){
        return <div className={style.greetings}> Hello {props.children} </div>
    }
    if (props.lang === "fr"){
        return <div className={style.greetings}> Bonjour {props.children} </div>
    }
    if (props.lang === "es"){
        return <div className={style.greetings}> Hola {props.children}</div>
    }
        // JAVASCRIPT PURO SEMPRE TEM QUE SER ANTES DO RETURN !!!!!!!!!!!!!!!!!!!


    // return (
    //         <>
                

    //             <div lang={props.lang}> {props.children}</div>    
    //             {/* TEM QUE FAZER UM IF ? SE PROPS.LANG = "DE" RETURN `HALLO ${props.CHILDREN}`?? */}
    //         </>
    // )
}