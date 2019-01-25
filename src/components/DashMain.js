import React, { Component } from 'react';
import { Button, Container, Row, Col, ButtonGroup, ButtonToolbar, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Calendar } from 'react-feather';
import { Line } from 'react-chartjs';
import PrivateRoute from './PrivateRoute.js';
import MyTable from './MyTable.js';
/*
 <!-- Graphs -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js"></script>
  <script>
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        datasets: [{
          data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
          lineTension: 0,
          backgroundColor: 'transparent',
          borderColor: '#007bff',
          borderWidth: 4,
          pointBackgroundColor: '#007bff'
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: false,
        }
      }
    });
  </script>
*/

const DashMainTitle = () => (
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-5 pt-5 border-bottom">
        <h1 className="h2">Dashboard</h1>
        <ButtonToolbar className="mb-2 mb-md-0">
            <ButtonGroup>
                <Button variety="outline-secondary">Share</Button>
                <Button variety="outline-secondary">Export</Button>
            </ButtonGroup>
            <Button variety="outline-secondary" className="dropdown-toggle">
                <span > <Calendar /></span>
                This week
                        </Button>
        </ButtonToolbar>
    </div>
);

export default class DashMain extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    

    render() {
        const chartData = {
            labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            datasets: [{
                data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
                lineTension: 0,
                backgroundColor: 'transparent',
                borderColor: '#007bff',
                borderWidth: 4,
                pointBackgroundColor: '#007bff'
            }],
        }
        const chartOptions = {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            },
            legend: {
                display: false,
            }
        }

        return (
            <>
                <PrivateRoute />
                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                    <DashMainTitle />

                    {/* <Line data={chartData} options={chartOptions} width="900" height="380" /> */}
                    <canvas className="my-4" id="myChart" width="900" height="380"></canvas>

                    <h2> Section title </h2>
                   <MyTable />
                </main >
            </>
        )
    }
}
