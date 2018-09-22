import * as React from 'react';
import './App.css';

import logo from './logo.svg';

class App extends React.Component {
  public state ={
    activateShit: false,
    someShittyArray: [1]
  }
  public someHandler = () =>{
    for (let i= 0; i<=10; i++){
      console.log(i);
      this.setState({someShittyArray: this.state.someShittyArray.push(this.state.someShittyArray[i])})
      this.someOtherHandler();
    }
  }
  public someOtherHandler = () =>{
        setTimeout(()=>{
          this.setState({activateShit:!this.state.activateShit})},
           1000);
  }
  public render() {
    // tslint:disable-next-line
    debugger;
    console.log(typeof this.state.someShittyArray);
    console.log(this.state.someShittyArray);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <button name="someButton" onClick={this.someHandler}>
          clickHere
          </button>
        </header>
          {this.state.activateShit && this.state.someShittyArray.map((a, index )=>  <h1 className="Hello" key={index}>{a}</h1>) }
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}


export default App;
