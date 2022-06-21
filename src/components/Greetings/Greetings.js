export function Greetings (props){
    if (props.lang === "de"){
        return <div>hallo {props.children}</div>
        //jeito certo!!!!!!!!^^^^^^^^^^^
    }
    if (props.lang === "en"){
        return <div>hello {props.children} </div>
    }
    if (props.lang === "fr"){
        return <div> bonjour {props.children} </div>
    }
    if (props.lang === "es"){
        return <div>hola {props.children}</div>
    }
        // JAVASCRIPT PURO SEMPRE TEM QUE SER ANTES DO RETURN !!!!!!!!!!!!!!!!!!!


    // return (
    //         <>
                

    //             <div lang={props.lang}> {props.children}</div>    
    //             {/* TEM QUE FAZER UM IF ? SE PROPS.LANG = "DE" RETURN `HALLO ${props.CHILDREN}`?? */}
    //         </>
    // )
}