import './css/app.css';
import {Back,Front} from './pages/';
import {Switch , Route } from 'react-router-dom';
function App() {
  return (
    <Switch>
      <Route exact path='/' component={Front} />
      <Route path='/admin' component={Back} />
    </Switch>
  );
}

export default App;
