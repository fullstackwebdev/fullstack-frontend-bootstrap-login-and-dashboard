import React, { Component } from 'react'
import {Table, Row} from 'react-bootstrap';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const MYTABLE_QUERY = gql`
  {
    myTables {
      col1
      col2
      col3
      col4
      col5
    }
  }
`

export default class MyTable extends Component {
    tableRow1() {
        return (
            <Query query={MYTABLE_QUERY}>
                {({ loading, error, data }) => {
                    if (loading) return <div>Fetching</div>
                    if (error) return <div>Error {error.toString()}</div>

                    const myTableResults = data.myTable;

                    return (
                        <>
                        </>
                            // {
                            //     {myTableResults.map((data) => (
                            //     <tr>
                            //         <td>{data.col1}</td>
                            //         <td>{data.col2}</td>
                            //         <td>{data.col3}</td>
                            //         <td>{data.col4}</td>
                            //         <td>{data.col5}</td>
                            //     </tr>
                            //     ))
                            // }}
                        )     
                }}      
            </Query>
        )
    }

  render() {
    return (
      <div>
            <Table striped size="sm" responsive>
                <thead>
                    <tr>
                        <th># </th>
                        <th>Header1</th>
                        <th>Header2</th>
                        <th>Header3</th>
                        <th>Header4</th>
                    </tr>
                </thead>
                <tbody>
                    {this.tableRow1()}
                </tbody>
            </Table>
      </div>
    )
  }
}


 // return (
        //     [{
        //         'col1': 1,
        //         'col2': 'lorem',
        //         'col3': 'ipsum',
        //         'col4': 'dolor',
        //         'col5': 'sit',
        //     },
        //     {
        //         'col1': 1,
        //         'col2': 'lorem',
        //         'col3': 'ipsum',
        //         'col4': 'dolor',
        //         'col5': 'sit',
        //     },
        //     {
        //         'col1': 1,
        //         'col2': 'lorem',
        //         'col3': 'ipsum',
        //         'col4': 'dolor',
        //         'col5': 'sit',
        //     },
        //     {
        //         'col1': 1,
        //         'col2': 'lorem',
        //         'col3': 'ipsum',
        //         'col4': 'dolor',
        //         'col5': 'sit',
        //     },
        //     {
        //         'col1': 1,
        //         'col2': 'lorem',
        //         'col3': 'ipsum',
        //         'col4': 'dolor',
        //         'col5': 'sit',
        //     },
        //     ].map((data) => (
        //         <tr>
        //             <td>{data.col1}</td>
        //             <td>{data.col2}</td>
        //             <td>{data.col3}</td>
        //             <td>{data.col4}</td>
        //             <td>{data.col5}</td>
        //         </tr>
        //     ))
        // )