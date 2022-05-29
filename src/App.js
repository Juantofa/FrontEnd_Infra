import Home from './components/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LibroComponent from './components/LibroComponent'
import AutorComponent from './components/AutorComponent'
import EnsayoAntonioComponent from './components/EnsayoAntonioComponent'
import EnsayoJuanComponent from './components/EnsayoJuanComponent'

function App() {
  return (
    <div>
      <Home />
      <div class="container">
        <br></br>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LibroComponent />} />
            <Route path="libros" element={<LibroComponent />} />
            <Route path="autores" element={<AutorComponent />} />
            <Route path="ensayo-antonio" element={<EnsayoAntonioComponent />} />
            <Route path="ensayo-juan" element={<EnsayoJuanComponent />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
