import logo from './platzi.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoCount 
        completed={8}
        total={10}
      />
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprendamos react
        </a>
      </header>
    </div>
  );
}

function TodoItem(){
  return(
    <li>
      <span>V</span>
      <p>Llorar por la llorona</p>
      <span>X</span>
    </li>
  );
}

function TodoCount(props){
  return(
    <h1>
      Completaste 
      {props.completed} de {props.total} TODOS
    </h1>
  );
}


export default App;
