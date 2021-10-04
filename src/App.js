import './App.css';
import Navbar from './components/navbar/Navbar';
import WebTV from './components/pages/webTV/WebTV.jsx';
import Home from './components/pages/accueil/Home.jsx';
import Equipe from './components/pages/equipe/Equipe.jsx';
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
          </Switch>
      </Router>
      <p className="footer">© Hope Esport – 2021 Mentions légales</p>
    </div>
  );
}

export default App;
