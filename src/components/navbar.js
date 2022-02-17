import React, { Component } from 'react'
import '../css/navbar.css'

export class navbar extends Component {


  constructor(props) {
    super(props)

    this.state = {
      button: JSON.parse(localStorage.getItem('user'))
    }
  }


  handleLogout = (e) => {
    e.preventDefault();
    if (window.confirm("You won't be able to see the comments if logged out")) {
      localStorage.removeItem('user')
      this.setState({ button: JSON.parse(localStorage.getItem('user')) })
    }
    
  }

  handleLogin = (e) => {
    this.props.handleLoged()
  }

  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Instagram</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li> */}
                {/* <li class="nav-item">
                  <a class="nav-link disabled">Disabled</a>
                </li> */}
              </ul>
              <div class="d-flex">
                <button
                  class="btn btn-outline-success log-btn"
                  type="submit"
                  onClick={this.state.button ? this.handleLogout : this.handleLogin} >
                  {this.state.button ? "Logout" : "Login"}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default navbar







