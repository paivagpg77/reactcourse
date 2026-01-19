import Item from "./Item"
function List(){
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Nike" ano_lancamento={1999}/>
                <Item marca="Adidas" ano_lancamento={1964}/>
                <Item marca="Fiat" ano_lancamento={1998}/>
                <Item/>
            </ul>
        </>
    )
}

export default List