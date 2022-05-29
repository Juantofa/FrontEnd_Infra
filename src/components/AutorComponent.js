import { useState, useEffect } from "react"
import DataService from '../services/DataService';

export const LibroComponent = () => {

    const [autorName, setAutorName] = useState('')
    const [autorApellido, setAutorApellido] = useState('')
    const [autorId, setAutorId] = useState()
    const [autores, setAutores] = useState([{}])

    const getAutores = async () => {
        DataService.getAutores().then((response) => {
            setAutores(response.data)
        })
    }

    useEffect(() => {
        getAutores();
    }, [])


    const cardStyle = {
        width: "18rem",
    }
    const gridStyle = {
        display: "flex",
        padding: "30px"
    }

    return (
        <div>
            <h1>Autores:</h1>
            <div style={gridStyle}>
                {
                    autores.map(
                        autor =>
                            <div style={gridStyle}>
                                <div class="card" style={cardStyle}>
                                    <div class="card-body">
                                        <h5 class="card-title">{autor.nombre} - {autor.id}</h5>
                                        <h6 class="card-subtitle mb-2 text-muted">{autor.apellido}</h6>
                                    </div>
                                </div>
                            </div>
                    )
                }
            </div >
        </div >
    )
}
export default LibroComponent