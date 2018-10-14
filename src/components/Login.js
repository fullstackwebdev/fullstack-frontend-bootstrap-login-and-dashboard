import React, { Component } from 'react';
import { Button, Form, Image } from 'react-bootstrap';
//import { styles } from './login.css';
import './login.css';
import { AUTH_TOKEN } from '../constants';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

////
const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`
////
export default class Login extends Component {
    state = {
        login: true, // switch between Login and SignUp
        email: '',
        password: '',
        name: '',
    }

    componentWillMount() {
        document.body.classList.add("text-center");
        document.body.classList.add("mybody")
        // .mybody {
        //     display: -ms - flexbox;
        //     display: flex;
        //     -ms - flex - align: center;
        //     align - items: center;
        //     padding - top: 40px;
        //     padding - bottom: 40px;
        //     background - color: #f5f5f5;
        // }
    }

    _confirm = async data => {
        const { token } = this.state.login ? data.login : data.signup
        this._saveUserData(token)
        this.props.history.push(`/`)
    }

    _saveUserData = token => {
        console.log('and here');
        localStorage.setItem(AUTH_TOKEN, token)
    }

    render() {

        const { login, email, password, name } = this.state

        return (
            <React.Fragment>
                <Form className="form-signin">
                    <Image className="mb-4"
                        src="bootstrap-solid.svg" alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <Form.Group>
                        <Form.Label className="sr-only">Email address</Form.Label>


                        {/* ///// */}
                        <Form.Control
                            value={email}
                            onChange={e => this.setState({ email: e.target.value })}
                            type="text"
                            id="inputEmail"
                            placeholder="Email Address"
                            required autoFocus
                        />
                        {/* ///// */}

                        <Form.Label className="sr-only">Password</Form.Label>
                        <Form.Control
                            value={password}
                            onChange={e => this.setState({ password: e.target.value })}
                            type="password"
                            id="inputPassword"
                            className=""
                            placeholder="Password"
                            required
                        />
                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            {/* <Form.Check value="remember-me" /> Remember me */}
                            </label>
                        </div>
                        <Mutation
                            mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
                            variables={{ email, password, name }}
                            onCompleted={data => this._confirm(data)}
                        >
                            {mutation => (
                                <Button
                                    variety="primary"
                                    block size="lg"
                                    onClick={mutation}
                                > {login ? 'login' : 'create account'} </Button>
                                // <div className="pointer mr2 button" onClick={mutation}>
                                //     {login ? 'login' : 'create account'}
                                // </div>
                            )}
                        </Mutation>
                    </Form.Group>
                    <p className="mt-5 mb-3 text-muted">&copy; 2018</p>
                </Form>
            </React.Fragment>
        )
    }
}
