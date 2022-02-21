import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import '../css/login.css'

export class login extends Component {

    userData;

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: ''
        }

    }

    onSubmit = (e) => {
        e.preventDefault();
        if (localStorage.getItem('user')) {
            this.props.handleLoged()
        }
    }

    onChangeName = (e) => {
        this.setState({ name: e.target.value })
    }

    onChangeEmail = (e) => {
        this.setState({ email: e.target.value })
    }

    onChangePassword = (e) => {
        this.setState({ password: e.target.value })
    }


    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }

    render() {
        return (
            <div className='main-login'>
                <div id='login-page'>
                    <Form id="login-form" onSubmit={this.onSubmit}>
                        <h2 className='login-heading'>Login to begin</h2>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Name: </Form.Label>
                            <Form.Control type="name" placeholder="First name" value={this.state.name} onChange={this.onChangeName} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address: </Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={this.onChangeEmail} />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password: </Form.Label>
                            <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.onChangePassword} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        )
    }
}

export default login