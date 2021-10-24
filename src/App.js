import './App.css';
import Navbar from './components/navbar/Navbar';
import ContactForm from './components/pages/ContactForm/ContactForm.jsx';
import Staff from './components/pages/staff/Staff.jsx';
import WebTV from './components/pages/webTV/WebTV.jsx';
import Home from './components/pages/accueil/Home.jsx';
import Equipe from './components/pages/equipe/Equipe.jsx';
import Brackets from './components/pages/tournois/brackets/Brackets.jsx';
import HallFame from './components/pages/tournois/hall of fame/HallFame.jsx';
import Propos from './components/pages/apropos/Propos.jsx';
import Boutique from './components/pages/boutique/Boutique.jsx';
import ErrorPage from './components/pages/404/error_page';
import NavbarMobile from './components/navbar/NavbarMobile';
import PlayerCard from './components/playerCard/PlayerCard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar className="nav" />
        <NavbarMobile className="navMobile" />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/web-tv" component={WebTV}/>
            <Route path="/equipe" component={Equipe}/>
            <Route path="/equipe/:id" component={PlayerCard}/>
            <Route path="/contact" component={ContactForm}/> 
            <Route path="/staff" component={Staff}/>
            <Route path="/brackets" component={Brackets}/>
            <Route path="/hall-of-fame" component={HallFame}/>
            <Route path="/a-propos" component={Propos}/>
            <Route path="/boutique" component={Boutique}/>
            <Route component={ErrorPage}/>
          </Switch>
      </Router>
      <p className="footer">© Hope Esport – 2021 Mentions légales</p>
    </div>
  );
}

export default App;
