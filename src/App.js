import './assets/css/App.css';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import './assets/css/header.css';

import Home from './components/pages/index';
import Albergue from './components/pages/el-albergue';
import Animals from './components/pages/nuestros-animales';
import Faq from './components/pages/faq';
import Legislacion from './components/pages/legislacion';
import Contacto from './components/pages/contacto';
import AnimalesPerdidos from './components/pages/animales-perdidos' ;
import Footer from './components/footer';


function App() {
  return (
    <>
    <Router>

      <div className="header">
        <NavBar />
      </div>

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/el-albergue' component={Albergue} />
          <Route path='/nuestros-animales' component={Animals} />
          <Route path='/faq' component={Faq} />
          <Route path='/lesgilacion' component={Legislacion} />
          <Route path='/contacto' component={Contacto} />
          <Route path='/animales-perdidos' component={AnimalesPerdidos} />
        </Switch>
   
    </Router>
    <Footer />
    </>


  );
}

export default App;
