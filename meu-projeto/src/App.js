import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const nome = "Maria"
  return (
    <div className="App">
      <SayMyName nome="Gabriel"/>
      <SayMyName nome={nome}/>
      <Pessoa nome="Gabriel" idade="15 anos" profissao="Programador"  foto="https://randomuser.me/api/portraits/men/32.jpg
      "/>
    </div>
  );
}

export default App;
