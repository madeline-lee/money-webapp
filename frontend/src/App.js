import React from 'react';
import logo from './piggy-bank.png';
import './App.css';
import DataTable from './dataTable'
import BarChart from './barChart'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      user:[],
      userdata: [],
      account: [],
      accountdata: [],
      showUserData: true
    };
  this.getUserData = this.getUserData.bind(this);
  this.showUserData = this.showUserData.bind(this);


  }

  getUserData() {
    fetch("http://localhost:3000/user")
      .then(res => res.text())
      .then(res => this.setState({ user: JSON.parse(res)}))
      .catch(err => err);
  }



  componentDidMount(){
    this.getUserData();
  }

  showUserData() {
    this.getUserData();
  }


  render() {
    var tableofContact = (
      <DataTable id="data_table" userdata ={this.state.user}/>)

    return(
      <header>
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div id = "chart">
            {<BarChart id="bar_chart" data={this.state.user}/>}
          </div>
          <div id = "datatable">
            {this.showUserData}
              {tableofContact}
          </div>      
        </header>
        </div>        
      </header>
    
    )
  }
}

export default App;