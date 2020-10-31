import './App.css';
import {Provider} from 'react-redux'
import {store} from './redux/redux'
import {TodoInput} from './components/TodoInput';
import {TodoList} from './components/TodoList';

function App() {
  return (
    <Provider store={store}>
        <div className="App">
          <TodoInput />
          <TodoList/>
        </div>
    </Provider>
  );
}

export default App;
