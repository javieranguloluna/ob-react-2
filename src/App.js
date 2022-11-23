import logo from './logo.svg';
import './App.css';
import Clock from './components/classComponent';
import FuncClock from './components/funcComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Class Component</h2>
        <Clock></Clock>
        
        <h2>Functional Component</h2>
        <FuncClock></FuncClock>
      </header>
    </div>
  );
}

export default App;
