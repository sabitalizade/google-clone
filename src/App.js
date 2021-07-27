import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import SearchStart from './views/SearchStart';

function App() {
  return (
    <Router>
        <Route path="/" exist>
          <SearchStart />
        </Route>
  </Router>
  );
}

export default App;
