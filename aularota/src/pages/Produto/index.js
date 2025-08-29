import { Link, useParams } from "react-router-dom"

function Produto() {

    const { id } = useParams()

    return (
        <div>
            <h2>Detalhe do produto</h2>
            <span>meu produto é {id}</span>
        </div>
    )
}

export default Produto