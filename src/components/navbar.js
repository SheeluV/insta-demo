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
      this.props.handleProfile();
      
    
  }}

  handleLogin = (e) => {
    this.props.handleLoged();
  }

  render() {
    return (
      <div id='home-page'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Instagram</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li> */}
                {/* <li className="nav-item">
                  <a className="nav-link disabled">Disabled</a>
                </li> */}
              </ul>
              <div className="d-flex nav-div">
              <i class="fa-solid fa-house"></i>
              <i class="fa-brands fa-facebook-messenger"></i>
              <i class="fa-solid fa-circle-plus"></i>
                <button
                  className="btn btn-outline-success log-btn"
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







