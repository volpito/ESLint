import React from 'react';
import ReactDOM from 'react-dom';
import Books from './components/Books';


const App = () => (
  
  <div>
    <h1>Hello world!</h1>
    < Books />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));