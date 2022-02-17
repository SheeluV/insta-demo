import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Login from './components/login';
import Home from './components/Posts';
export class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      user: JSON.parse(localStorage.getItem('user'))
    }

  }

  loged = () => {
    this.setState({ user: JSON.parse(localStorage.getItem('user')) })
  }

  render() {
    console.log(this.state.user);
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => (
              this.state.user ?
                <Home loged={this.state.user} handleLoged={this.loged} /> :
                <Login loged={this.state.user} handleLoged={this.loged} />
            )}>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
