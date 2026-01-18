
import './App.css';

function App() {
  const name = 'Gabriel'
  const Newname = name.toUpperCase()

  function sum(a,b){
    return a+b
  }

  function div(a,b){
    return a/b
  }


  const url = "https://picsum.photos/300/200"
  const url2 = "https://placehold.co/300x200?text=React"

  return (
    <div className="App">
      <h1>Olá React</h1>
      <p>Meu nome maiusculo é {Newname}</p>
      <p>Soma: {sum(1,3)}</p>
      <p>Divisão: {div(4,2)}</p>
      
      <img src={url2} alt='Minha imagem'/>

    </div>
  );
}

export default App;
