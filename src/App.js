import React, { Component } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Login from './Login/Login';

export class App extends Component{


  render(){
      return(
       <Router>
               <>
                  <Login/>
              </>
       </Router>
      )
  }
}

export  default App;
