export function Rating (props){
    const roundRating = Math.round(props.children)
    // const stars = "★"
    // ★★★★★★★ usar issso pra mostrar como estrela
    if (roundRating === 0) {
        return <> 0 </>
    }
    if (roundRating === 1) {
        return <> ★ </>
    }
    if (roundRating === 2) {
        return <> ★★ </>
    }
    if (roundRating === 3) {
        return <> ★★★ </>
    }
    if (roundRating === 4) {
        return <> ★★★★ </>
    }
    if (roundRating === 5) {
        return <> ★★★★★ </>
    }

    // return (
    //     <>{roundRating}</>
    // )
}