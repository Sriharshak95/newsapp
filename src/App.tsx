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
          <Route exact path="/" component={Home} />
          <Route path="/detail" component={Detail} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
