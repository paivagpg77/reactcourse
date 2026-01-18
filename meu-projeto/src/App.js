import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {
  const nome = "Maria"
  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase/>
      <Frase/>
      <SayMyName nome="Gabriel"/>
      <SayMyName nome={nome}/>
      <Pessoa nome="Gabriel" idade="15 anos" profissao="Programador"  foto="https://randomuser.me/api/portraits/men/32.jpg
      "/>

      <List/>
    </div>
  );
}

export default App;
