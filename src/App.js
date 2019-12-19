import React from 'react';
import TodoStateFull from './components/todoStatefull';
import TodoFunctional from './components/todoFunctional';
import Count from "./components/exemploRedux"

function App() {
  return (
    <div>
      <TodoStateFull />
      <br />
      <Count />
      <br />
      <TodoFunctional />
    </div>
  )
}

export default App;