import './assets/css/App.css';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Home from './components/pages/index';
import About from './components/pages/about';
import Prueba from './components/pages/prueba';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/prueba' component={Prueba} />
      </Switch>
    </Router>
  );
}

export default App;
