import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import routes from './routes';

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route, index)=> {
          return(
            <Route
            key={index}
            path={route.path}
            exact={route.exact}
            render={(props)=>{
              return(
                <route.layout {...props}>
                  <route.component {...props} />
                </route.layout>
              )
            }}
            />
          )
        })}
        <Redirect to={"/"} />
      </Switch>
    </Router>
  );
}

export default App;
