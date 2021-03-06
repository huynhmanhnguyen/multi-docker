import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./Fib";

function App() {
  return (
      <Router>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Wellcome to react</h1>
              <Link to="/">Home</Link>
              <Link to="/otherpage">Other page</Link>
            </header>
          </div>
          <Route path="/" exact component={Fib} />
          <Route path="/otherpage" component={OtherPage} />
      </Router>
  );
}

export default App;
