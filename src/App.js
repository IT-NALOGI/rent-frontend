import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import CreateRentalComponent from './CreateRentalComponent';
import GetRentalComponent from './GetRentalComponent';
import UpdateRentalComponent from './UpdateRentalComponent';
import DeleteRentalComponent from './DeleteRentalComponent';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Rental Management System</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/create">Create Rental</Link></li>
            <li><Link to="/get">Get Rental</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/create" component={CreateRentalComponent} />
          <Route path="/get" component={GetRentalComponent} />
          <Route path="/update/:id" component={UpdateRentalComponent} />
          <Route path="/delete/:id" component={DeleteRentalComponent} />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Welcome to the Rental Management System</h2>;
}

export default App;
