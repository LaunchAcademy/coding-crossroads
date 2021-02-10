import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { hot } from "react-hot-loader/root"

import "../assets/scss/main.scss"
import getCurrentUser from "../services/getCurrentUser"

import TopBar from "./layout/TopBar"
import RegistrationForm from "./registration/RegistrationForm"
import SignInForm from "./authentication/SignInForm"
import ResourceList from "./resources/ResourceList"
import ResourceDetails from "./resources/ResourceDetails"

const App = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined)

  const fetchCurrentUser = async () => {
    try {
      const user = await getCurrentUser()
      setCurrentUser(user)
    } catch(err) {
      setCurrentUser(null)
    }
  }

  useEffect(() => {
    fetchCurrentUser()
  }, [])

  return (
    <Router>
      <TopBar user={currentUser} />
      <Switch>
        <Route exact path="/users/new" component={RegistrationForm} />
        <Route exact path="/user-sessions/new" component={SignInForm} />
        <Route exact path="/" component={ResourceList} user={currentUser}/>
        {/* <Route exact path="/">
          <ResourceList user={currentUser}/>
        </Route> */}
        <Route exact path="/resources" component={ResourceList}/>
        <Route exact path="/resources/:id" component={ResourceDetails}/>
      </Switch>
    </Router>
  )
}

export default hot(App)
