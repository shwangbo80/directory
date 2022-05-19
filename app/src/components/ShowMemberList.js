import React, {Component} from "react"
import "../App.css"
import axios from "axios"
import {Link} from "react-router-dom"
import MemberCard from "./MemberCard"

class ShowMemberList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            members: [],
        }
    }

    componentDidMount() {
        axios
            .get("http://localhost:8082/api/members")
            .then((res) => {
                this.setState({
                    members: res.data,
                })
            })
            .catch((err) => {
                console.log("Error from ShowBookList")
            })
    }

    render() {
        const members = this.state.members
        console.log("PrintBook: " + members)
        let bookList

        if (!members) {
            bookList = "there is no book record!"
        } else {
            bookList = members.map((book, k) => (
                <MemberCard book={book} key={k} />
            ))
        }

        return (
            <div className="ShowBookList">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <br />
                            <h2 className="display-4 text-center">
                                Member List
                            </h2>
                        </div>

                        <div className="col-md-11">
                            <Link
                                to="/create-member"
                                className="btn btn-outline-primary">
                                + Add New Member
                            </Link>
                            <Link
                                to="/"
                                className="btn btn-primary float-right">
                                Logout
                            </Link>
                            <br />
                            <br />
                            <hr />
                        </div>
                    </div>

                    <div className="list">{bookList}</div>
                </div>
            </div>
        )
    }
}

export default ShowMemberList
