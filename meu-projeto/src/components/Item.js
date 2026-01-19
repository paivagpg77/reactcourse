import PropsTypes, { any } from 'prop-types'

function Item({marca , ano_lancamento}){
    return(
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

Item.propsTypes = {
    marca: PropsTypes.string.isRequired,
    ano_lancamento: PropsTypes.number.isRequired
}

export default Item 