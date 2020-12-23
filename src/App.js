import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';

function App() {

  


  return (
    <Router>
        <Route exact path="/" component={SignIn}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/home" component={Home}/>
    </Router>
    
  );
}

export default App;

