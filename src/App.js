import './App.css';
import Navbar from './components/navbar/Navbar';
import Staff from './components/pages/staff/Staff.jsx'
// import WebTV from './components/pages/webTV/WebTV';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Staff />
          {/* <WebTV /> */}
        </Switch>
      </Router>
      <p className="footer">© Hope Esport – 2021 Mentions légales</p>
    </div>
  );
}

export default App;
