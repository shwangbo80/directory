import React, {Component} from "react"
import {Link} from "react-router-dom"
import "../App.css"
import axios from "axios"

class showMemberDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            member: {},
        }
    }

    componentDidMount() {
        axios
            .get(
                "http://localhost:8082/api/members/" +
                    this.props.match.params.id
            )
            .then((res) => {
                this.setState({
                    member: res.data,
                })
            })
            .catch((err) => {
                console.log("Error from ShowMemberDetails")
            })
    }

    onDeleteClick(id) {
        // eslint-disable-next-line no-restricted-globals
        const deleteConfirm = confirm("Are you sure you want to delete member?")
        if (!deleteConfirm) {
            console.log("member not deleted")
        } else {
            axios
                .delete("http://localhost:8082/api/members/" + id)
                .then((res) => {
                    this.props.history.push("/show-members")
                })
                .catch((err) => {
                    console.log("Error form ShowMemberDetails_deleteClick")
                })
        }
    }

    render() {
        const member = this.state.member
        let MemberItem = (
            <div>
                <table className="table table-hover table-light">
                    <tbody>
                        <tr>
                            <th>First Name</th>
                            <td>{member.firstName}</td>
                        </tr>
                        <tr>
                            <th>Last name</th>
                            <td>{member.lastName}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{member.email}</td>
                        </tr>
                        <tr>
                            <th>Phone</th>
                            <td>{member.phone}</td>
                        </tr>
                        <tr>
                            <th>Location</th>
                            <td>{member.location}</td>
                        </tr>
                        <tr>
                            <th>Registered Date</th>
                            <td>{member.registered_date}</td>
                        </tr>
                        <tr>
                            <th>Job Title</th>
                            <td>{member.title}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )

        return (
            <div className="ShowBookDetails">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 m-auto">
                            <br /> <br />
                            <Link
                                to="/show-members"
                                className="btn btn-outline-primary float-left">
                                Show Member List
                            </Link>
                        </div>
                        <br />
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">
                                Member Record
                            </h1>
                            <p className="lead text-center">View Member Info</p>
                            <hr /> <br />
                        </div>
                    </div>
                    <div>{MemberItem}</div>

                    <div className="row">
                        <div className="col-md-6">
                            <button
                                type="button"
                                className="btn btn-outline-danger btn-lg btn-block"
                                onClick={this.onDeleteClick.bind(
                                    this,
                                    member._id
                                )}>
                                Delete Member
                            </button>
                            <br />
                        </div>

                        <div className="col-md-6">
                            <Link
                                to={`/edit-member/${member._id}`}
                                className="btn btn-outline-info btn-lg btn-block">
                                Edit Member
                            </Link>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default showMemberDetails
