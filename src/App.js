import React from 'react';
import './App.css'; // Import the CSS file for styling
import Navigation from './Navigation'; // Import the Navigation component
import LoginForm from './LoginForm'; // Import the LoginForm component

// App component
function App() {
  return (
    <div className="App"> 
      <Navigation />
      <LoginForm />
    </div>
  );
}

export default App;








/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

