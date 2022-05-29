import React from 'react';

class Home extends React.Component {

    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/">Juan Torres & Antonio Royo</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/libros">Libros</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/autores">Autores</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/ensayo-juan">Ensayo Juan Torres</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/ensayo-antonio">Ensayo Antonio Royo</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div >
        )
    }
}
export default Home