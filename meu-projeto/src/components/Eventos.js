import Button from "./eventos/Button"
function Eventos(){

    function meuEvento(){
        console.log(`Ativando Primeiro Evento! `)
    }

    function segundoEvento(){
        console.log("Ativando segundo evento!")
    }

    return(
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>
        </div>
    )
}

export default Eventos