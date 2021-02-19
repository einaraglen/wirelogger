import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Settings from './components/Settings'
import Exceptions from './components/Exceptions'
import SideBar from './components/SideBar'
import './App.css'
import './Grid.css'

const VERSION = "0.0.2"

const App = () => {

  return (
    <Router>
      <Header />
      <div className="main-grid">
            <div className="m1">
                <Switch>
                    <Route path="/" exact component={Main}/>
                    <Route path="/exceptions" component={Exceptions}/>
                    <Route path="/settings" component={Settings}/>
                </Switch>
            </div>
            <div className="m2" id="side">
              <SideBar />
            </div>
        </div> 
      <Footer version={VERSION}/>
    </Router>
  )
}

export default App