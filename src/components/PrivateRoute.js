import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {AUTH_TOKEN} from '../constants.js';

export default class PrivateRoute extends Component {
    constructor(props) {
        super(props);

        this.isAuthenticated = localStorage.getItem(AUTH_TOKEN) ? true : false;

        //const ...rest = this.props;
    }

    render() {
        if (!this.isAuthenticated) {
            return (
                <Redirect to='/login' />
            )
        } else return (
            <>
            </>
        )
    }
}
