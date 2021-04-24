import Container from '@material-ui/core/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import Detail from './screens/detailsScreen/detail';
import Home from './screens/homeScreen/home';

function App() {
  return (
    <Router>
      <Container maxWidth="md">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
