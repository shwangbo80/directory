import React, {Component} from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import "./App.css"

import Login from "./components/Login"
import CreateMember from "./components/CreateMember"
import ShowMemberList from "./components/ShowMemberList"
import ShowMemberDetails from "./components/ShowMemberDetails"
import UpdateMemberInfo from "./components/UpdateMemberInfo"

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Login} />
                    <Route path="/show-members" component={ShowMemberList} />
                    <Route path="/create-member" component={CreateMember} />
                    <Route
                        path="/edit-member/:id"
                        component={UpdateMemberInfo}
                    />
                    <Route
                        path="/show-member/:id"
                        component={ShowMemberDetails}
                    />
                </div>
            </Router>
        )
    }
}

export default App
