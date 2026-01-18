import Item from "./Item"
function List(){
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Nike"/>
                <Item marca="Adidas"/>
                <Item marca="Fiat"/>
                <Item marca="Puma"/>
                <Item marca="Penalty"/>
            </ul>
        </>
    )
}

export default List