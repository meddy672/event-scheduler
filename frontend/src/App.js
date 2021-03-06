import Navbar from './Navbar/Navbar';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <Navbar />
      {props.children}
    </div>
  );
}

export default App;
