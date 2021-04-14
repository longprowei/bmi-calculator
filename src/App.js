import React from 'react';
import './App.scss';
import Calculator from './Calculator'

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="app-container row">
          <header className="mb-auto">
            <h3 className="text-center text-md-left"><a href="/">To My Homepage</a></h3>
          </header>
          <main className="align-self-center">
            <Calculator />
          </main>
          
          <footer className="mt-auto">
            <p>Chenglong Wei &copy; <span id="copyright-year">{new Date().getFullYear()}</span></p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
