import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './dashboard.css';

import DashNavbar from './DashNavbar.js';
import DashSidebar from './DashSidebar.js';
import DashMain from './DashMain.js';


export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <DashNavbar />
                <div className="container-fluid">
                    <Row>
                        <DashSidebar />

                        <DashMain />
                    </Row>
                </div>
            </div>
        )
    }
}
