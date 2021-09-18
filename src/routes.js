
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Menu from './components/Menu';

import Homepage from './pages/homepage';

import Ensaios from './pages/ensaios';

export default function Routes() {

  return (

    <div>

      <Router>
        <Menu />
        <Switch>

          <Route exact path="/" component={Homepage} ></Route>
          <Route  path="/ensaios" component={Ensaios} ></Route>
        </Switch>

      </Router>

    </div>
  )
}