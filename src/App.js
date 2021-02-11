import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Settings from './components/Settings'
import './App.css'
import './Grid.css'

const VERSION = "0.0.1"

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/settings" component={Settings}/>|
      </Switch>
      <Footer version={VERSION}/>
    </Router>
  )
}

export default App