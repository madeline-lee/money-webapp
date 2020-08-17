import React from 'react';

class AccountTable extends React.Component {
    render() {
        return (
            <div id={this.props.id}>
                <div>
                    <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Balance</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.accountdata.map((item) => {
                            
    
                            return (
                                <tr key = {item.name}>
                                    <td>{item.name}</td>
                                    <td>{item.balance}</td>
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


export default AccountTable;