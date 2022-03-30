import logo from './logo.svg';
import './App.css';
import List from './components/List';
import { useState } from 'react';

function App() {
  const [todoLists, setTodoLists] = useState([{

  }]);

  const createTodoList = () => {
    setTodoLists([...todoLists, {}]);
  }

  return (
    <div className="App">
      <header>
        <button onClick={createTodoList}>Add List</button>
        { todoLists.map(list => {
          return (
            <List list={list}/>
          )
        })}
      </header>
    </div>
  );
}

export default App;
