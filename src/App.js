import './App.css';
import Navbar from './components/navbar/Navbar';
import ContactForm from './components/pages/ContactForm/ContactForm.jsx';
import Staff from './components/pages/staff/Staff.jsx';
import WebTV from './components/pages/webTV/WebTV.jsx';
import Home from './components/pages/accueil/Home.jsx';
import Equipe from './components/pages/equipe/Equipe.jsx';

import PlayerDetails from './components/playerCard/PlayerDetails';

import Propos from './components/pages/apropos/Propos.jsx';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/web-tv" component={WebTV}/>
            <Route path="/equipe" component={Equipe}/>
            <Route path="/contact" component={ContactForm}/> 
            <Route path="/staff" component={Staff}/>

            <Route path="/player/:id" component={PlayerDetails}/>

            <Route path="/a-propos" component={Propos}/>

          </Switch>
      </Router>
      <p className="footer">© Hope Esport – 2021 Mentions légales</p>
    </div>
  );
}

export default App;
