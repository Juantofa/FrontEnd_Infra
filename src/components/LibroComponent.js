import { useState, useEffect } from "react"
import DataService from '../services/DataService';

export const LibroComponent = () => {

    const [libroName, setLibroName] = useState('')
    const [libroAutor, setLibroAutor] = useState('')
    const [libroPages, setLibroPages] = useState()
    const [libroId, setLibroId] = useState()
    const [libros, setLibros] = useState([{}])
    const [accion, setAccion] = useState('')

    const getLibros = async () => {
        DataService.getLibros().then((response) => {
            setLibros(response.data)
        })
    }

    useEffect(() => {
        getLibros();
    }, [])

    const handledSubmit = async (e) => {
        e.preventDefault();
        if (libroId != null) {
            DataService.updateLibros({ id: libroId, nombre: libroName, autor: libroAutor, nPaginas: libroPages })
        } else {
            DataService.setLibros({ nombre: libroName, autor: libroAutor, nPaginas: libroPages })
        }
        getLibros()
    }

    const deleteLibro = async (idLibro) => {
        console.log(idLibro)
        DataService.deleteLibros(idLibro)
        getLibros()
    }


    const cardStyle = {
        width: "18rem",
    }
    const gridStyle = {
        display: "flex",
        padding: "30px"
    }

    return (
        <div>
            <h1>Libros:</h1>
            <div style={gridStyle}>
                <div style={gridStyle}>
                    <div class="card" style={cardStyle}>
                        <form onSubmit={handledSubmit}>
                            <div className="form-group">
                                <label for="id" class="form-label">Id</label>
                                <input
                                    type="number"
                                    onChange={e => setLibroId(e.target.value)}
                                    value={libroId}
                                    className="form-control"
                                    id="id"
                                    autoFocus
                                />
                            </div>
                            <div className="form-group">
                                <label for="name" class="form-label">Nombre</label>
                                <input
                                    type="text"
                                    onChange={e => setLibroName(e.target.value)}
                                    value={libroName}
                                    className="form-control"
                                    id="name"
                                    autoFocus
                                />
                            </div>
                            <div className="form-group">
                                <label for="autor" class="form-label">Autor</label>
                                <input
                                    type="text"
                                    onChange={e => setLibroAutor(e.target.value)}
                                    value={libroAutor}
                                    className="form-control"
                                    id="autor"

                                />
                            </div>
                            <div className="form-group">
                                <label for="pages" class="form-label">Páginas</label>
                                <input
                                    type="number"
                                    onChange={e => setLibroPages(e.target.value)}
                                    value={libroPages}
                                    className="form-control"
                                    id="pages"
                                />
                            </div>
                            <button type="submit" class="btn btn-primary">Crear</button>
                        </form>
                    </div>
                </div>
                {
                    libros.map(
                        libro =>
                            <div style={gridStyle}>
                                <div class="card" style={cardStyle}>
                                    <div class="card-body">
                                        <h5 class="card-title">{libro.nombre} - {libro.id}</h5>
                                        <h6 class="card-subtitle mb-2 text-muted">{libro.autor}</h6>
                                        <p class="card-text">{libro.nPaginas} Páginas</p>
                                        <button type="button" class="btn btn-danger" onClick={() => deleteLibro(libro.id)}>Eliminar</button>
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