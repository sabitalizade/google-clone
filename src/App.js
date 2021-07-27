import './App.css';
import {
  BrowserRouter as Router,
  Route,

} from "react-router-dom";
import SearchStart from './views/SearchStart';
import SearchScrean from './views/SearchScrean';

function App() {
  return (
    <Router>
        <Route path="/" exact>
          <SearchStart />
        </Route>
        <Route path="/search" >
          <SearchScrean />
        </Route>
  </Router>
  );
}

export default App;
