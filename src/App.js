import './App.scss';
import Calculator from './Calculator'

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="app-container row">
          <header>
            <h4 className="text-center text-md-start"><a href="/">To My Homepage</a></h4>
          </header>
          <main className="align-self-center">
            <Calculator />
          </main>
          
          <footer className="align-self-end">
            <p>Chenglong Wei &copy; <span id="copyright-year">{new Date().getFullYear()}</span></p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
