import './App.css';
import { TodoForm } from './components/todoForm';
import { TodoWrapper } from './components/todoWrapper';

function App() {
  return (
    //give App component flex of 1
    <div className="App">
      <TodoWrapper className="todoWrapper"></TodoWrapper>
      {/* <TodoForm></TodoForm> */}
      {/* <footer>React Assignment-1</footer> */}
    </div>

  );
}

export default App;
