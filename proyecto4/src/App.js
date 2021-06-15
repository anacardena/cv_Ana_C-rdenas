import logo from './utils/images/logo.svg';
import './App.css';
import Inicio from "./componentes/Inicio.jsx"
import Sobremi from "./componentes/Sobremi.jsx"
import Habilidades from "./componentes/Habilidades.jsx"
import Mensaje from "./componentes/Mensaje.jsx"

function App() {
  return (
    <div className="App">
      <Inicio />
      <Sobremi />
      <Habilidades />
      <Mensaje />
    </div>
  );
}

export default App;


