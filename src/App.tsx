import * as React from 'react';
import './App.css';

import logo from './logo.svg';
Interface Props = {
  item: number
}
const SomeComponent:React.SFC<Props> = (props: any) => (
<h1 className="Hello" key={props.item}>{props.item}</h1>
);
class App extends React.Component {
  public state ={
    activateShit: false,

  }
  // public someHandler = () =>{
  //   for (let i= 0; i<=10; i++){
  //     console.log(i);
  //     this.setState({
  //       someShittyArray: [...this.state.someShittyArray]
  //     })
  //     this.someOtherHandler();
  //   }
  // }
  public someOtherHandler = () =>{
        // setTimeout(()=>{
          this.setState({activateShit:true})
        // },
        //    1000);
  }
  public render() {
    const someShittyArray: any = [];
    const handler =()=>{
      for (let i= 0; i<=10; i++){
        someShittyArray.push(
        <SomeComponent
        item={i}
        />)

        this.someOtherHandler();
      }
      console.log(someShittyArray);
    }
    
    // tslint:disable-next-line
    debugger;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <button name="someButton" onClick={handler}>
          clickHere
          </button>
        </header>
        {console.log(someShittyArray)}
          {this.state.activateShit && someShittyArray.map((a:number)=>a) }
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
