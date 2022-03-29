import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { Usercontext } from './Context/Usercontext';
import Deletecard from './Components/Deletecard';

function App() {
  return (
    <div className="App">
      <Usercontext>
      <Home/>
      


      </Usercontext>
    </div>
  );
}

export default App;
