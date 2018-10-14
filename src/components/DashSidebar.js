import React, { Component, Fragment } from 'react';
import { Nav, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Users, File, ShoppingCart, BarChart2, Layers, FileText, Home } from 'react-feather';


export default class DashSidebar extends Component {
    render() {
        return (
            <Fragment>


                <Nav className="col-md-2 d-none d-md-block bg-light sidebar">
                    <div className="sidebar-sticky">
                        <Nav className="flex-column">
                            <Nav.Item>
                                <Nav.Link active href="#">
                                    <span><Home /></span>
                                    Dashboard <span className="sr-only">(current)</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#">
                                    <span> <File /> </span>
                                    Orders
                            </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#">
                                    <span ><ShoppingCart /></span>
                                    Products
                            </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#">
                                    <span> <Users /> </span>
                                    Customers
                            </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#">
                                    <span > <BarChart2 /> </span>
                                    Reports
                            </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#">
                                    <span > <Layers /> </span>
                                    Integrations
                            </Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                            <span>Saved Reports</span>
                            <Link to="" className="d-flex align-items-center text-muted">
                                <span> <FileText /> </span>
                            </Link>
                        </h6>
                        <Nav className="flex-column">
                            <Nav.Item>
                                <Nav.Link href="#">
                                    <span > <FileText /></span>
                                    Current month
                            </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link href="#">
                                    <span> <FileText /></span>
                                    Last quarter
                            </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link href="#">
                                    <span> <FileText /></span>
                                    Social engagement
                            </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link href="#">
                                    <span > <FileText /></span>
                                    Year-end sale
                            </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </Nav>
            </Fragment>
        )
    }
}
