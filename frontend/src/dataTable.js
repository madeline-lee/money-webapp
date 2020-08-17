import React from 'react';

class DataTable extends React.Component {
    render() {
        return (
            <div id={this.props.id}>
                <div>
                    <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Balance</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.userdata.map((item) => {
                            return (
                                <tr key = {item.name}>
                                    <td class = "td">{item.name}</td>
                                    <td class = "td">{item.email}</td>
                                    <td class = "td">{item.mobile}</td>
                                </tr>
                            )
                        }
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


export default DataTable;