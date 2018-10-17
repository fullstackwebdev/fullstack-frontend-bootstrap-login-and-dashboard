import React, { Component } from 'react'
import { Form, FormControl, Container, Row, Col, Navbar, Nav, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AUTH_TOKEN } from '../constants.js';


export default class DashNavbar extends Component {

    _logout = function () {
        localStorage.removeItem(AUTH_TOKEN);
        this.props.history.push(`/`)
    }
    render() {
        return (
            <Navbar variant="dark" bg="dark" className="fixed-top shadow flex-md-nowrap p-0">
                <Navbar.Brand className="col-sm-3 col-md-2 mr-0">
                    Company Name
                </Navbar.Brand>
                {/* <Form inline className="w-100 form-control-dark" > */}
                <FormControl type="text" placeholder="Search" className="w-100 form-control-dark" />
                {/* </Form> */}
                <Nav className="px-3">
                    <Nav.Item className="text-nowrap">
                        <Link to="" className="nav-link" onClick={this._logout}> Sign out</Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        )
    }
}
