import React from 'react';
import './App.css';
import Calculator from './Calculator'

function App() {
  return (
    <div className="App">
      <div class="container-fluid">
        <div class="app-container row">
          <header class="mb-auto">
            header
          </header>
          <main class="align-self-center">
            <Calculator />
          </main>
          
          <footer class="mt-auto">
            footer
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
