import React, { Component } from 'react';
import { Button, Form, Image } from 'react-bootstrap';
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

////
export default class SignUp extends Component {
    state = {
        email: '',
        password: '',
        name: '',
        error: ''
    }

    _confirm = async data => {
        const { token } = data.signup
        this._saveUserData(token)
        this.props.history.push(`/`)
        console.log('sent browser to /');
    }

    _saveUserData = token => {
        console.log('and here');
        localStorage.setItem(AUTH_TOKEN, token)
    }

    _error = data => {
        console.log(data.graphQLErrors[0].message);
        this.setState({ error: data.graphQLErrors[0].message });
    }

    render() {

        const { login, email, password, name, error } = this.state

        return (
            <React.Fragment>
                {/* <Helmet>
                    <body className="mybody"></body>
                </Helmet> */}
                <Form className="form-signin">
                    <Image className="mb-4"
                        src="bootstrap-solid.svg" alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 font-weight-normal">Sign up</h1>
                    <Form.Group>
                        <Form.Label className="sr-only">Email address</Form.Label>
                        <Form.Control
                            value={name}
                            onChange={e => this.setState({ name: e.target.value })}
                            type="text"
                            id="inputName"
                            placeholder="Your name"
                            required autoFocus
                        />
                        <Form.Control
                            value={email}
                            onChange={e => this.setState({ email: e.target.value })}
                            type="text"
                            id="inputEmail"
                            placeholder="Email Address"
                            required autoFocus
                        />
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
                        {error && <h1>error {this.state.error}</h1>}

                        <Mutation
                            mutation={SIGNUP_MUTATION}
                            variables={{ email, password, name }}
                            onCompleted={data => this._confirm(data)}
                            onError={data => this._error(data)}
                        >
                            {mutation => (
                                <Button
                                    variety="primary"
                                    block size="lg"
                                    onClick={mutation}
                                > Create account </Button>
                            )}
                        </Mutation>
                    </Form.Group>
                    <p className="mt-5 mb-3 text-muted">&copy; 2018</p>
                </Form>
            </React.Fragment>
        )
    }
}
