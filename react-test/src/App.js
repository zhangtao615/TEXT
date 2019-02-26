import React, { Component } from 'react';
import './App.css';
import Class1 from "./conponents/Class1";
import Class2 from "./conponents/Class2";
import Class3 from "./conponents/Class3";
import Class4 from "./conponents/Class4";
import Class5 from "./conponents/Class5";
import{
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import Exercise1 from './conponents/Exercise1'
import Exercise3 from './conponents/Exercise3'
import {Provider} from 'react-redux'
import store from './store'

const Test =({match}) =>{
  return(
    <div>
      <h1>这是一个测试组件</h1>
    </div>
  )
}
class App extends Component {
  render() {
    return (
      <div className="App">
      <Provider store={store}>
        <Router>
          <div>
            <Link to="/">Class1</Link>|
            <Link to="/class2">Class2</Link>|
            <Link to="/class3">Class3</Link>|
            <Link to="/class4">Class4</Link>|
            <Link to="/class5">Class5</Link>|
            <Link to="/test">test</Link>|
            <Link to="/Exercise1">Exercise1</Link>|
            <Link to="/Exercise3">Exercise3</Link>|
            <Link to="/render">render</Link>
            <Switch>
              <Route path={'/class2'} component={Class2}/>
              <Route path={"/test"} component={Test}/>
              <Route path={"/class3"} component={Class3}/>
              <Route path={"/class4"} component={Class4}/>
              <Route path={"/class5"} component={Class5}/>
              <Route path={"/Exercise1"} component={Exercise1}/>
              <Route path={"/Exercise3"} component={Exercise3}/>
              <Route path={"/render"} render={() =><Redirect to="/class2s"/>}/>
              <Route path={"/"} component={Class1}/>
            </Switch>
          </div>
        </Router>
        </Provider>
      </div>
    );
  }
}

export default App;