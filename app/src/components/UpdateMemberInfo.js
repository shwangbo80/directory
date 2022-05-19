import React, {Component} from "react"
import {Link} from "react-router-dom"
import axios from "axios"
import "../App.css"

class UpdateBookInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            location: "",
            registered_date: "",
            title: "",
        }
    }

    componentDidMount() {
        // console.log("Print id: " + this.props.match.params.id);
        axios
            .get(
                "http://localhost:8082/api/members/" +
                    this.props.match.params.id
            )
            .then((res) => {
                this.setState({
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    email: res.data.email,
                    phone: res.data.phone,
                    location: res.data.location,
                    registered_date: res.data.registered_date,
                    title: res.data.title,
                })
            })
            .catch((err) => {
                console.log("Error from UpdateMemberInfo")
            })
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault()

        const data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phone: this.state.phone,
            location: this.state.location,
            registered_date: this.state.registered_date,
            title: this.state.title,
        }

        axios
            .put(
                "http://localhost:8082/api/members/" +
                    this.props.match.params.id,
                data
            )
            .then((res) => {
                this.props.history.push(
                    "/show-members/" + this.props.match.params.id
                )
            })
            .catch((err) => {
                console.log("Error in UpdateMemberInfo!")
            })
    }

    render() {
        return (
            <div className="UpdateBookInfo">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <br />
                            <Link
                                to="/show-members"
                                className="btn btn-outline-primary float-left">
                                Show Member List
                            </Link>
                        </div>
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">
                                Edit Member
                            </h1>
                            <p className="lead text-center">
                                Update Member Info
                            </p>
                        </div>
                    </div>

                    <div className="col-md-8 m-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    name="firstName"
                                    className="form-control"
                                    value={this.state.firstName}
                                    onChange={this.onChange}
                                />
                            </div>
                            <br />

                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    name="lastName"
                                    className="form-control"
                                    value={this.state.lastName}
                                    onChange={this.onChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    placeholder="Email"
                                    name="email"
                                    className="form-control"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input
                                    type="text"
                                    placeholder="Phone"
                                    name="phone"
                                    className="form-control"
                                    value={this.state.phone}
                                    onChange={this.onChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="location">Location</label>
                                <input
                                    type="text"
                                    placeholder="Location"
                                    name="location"
                                    className="form-control"
                                    value={this.state.location}
                                    onChange={this.onChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="registered_date">
                                    Registered Date
                                </label>
                                <input
                                    type="date"
                                    placeholder="registered_date"
                                    name="registered_date"
                                    className="form-control"
                                    value={this.state.registered_date}
                                    onChange={this.onChange}
                                />
                            </div>
                            <p>Job Title</p>
                            <select
                                type="text"
                                name="title"
                                className="form-control"
                                value={this.state.title}
                                onChange={this.onChange}>
                                <option value="Intern">Intern</option>
                                <option value="Frontend Developer">
                                    Frontend Developer
                                </option>
                                <option value="Backend Developer">
                                    Backend Developer
                                </option>
                                <option value="HR">HR</option>
                                <option value="Accounting">Accounting</option>
                                <option value="Senior Developer">
                                    Senior Developer
                                </option>
                                <option value="CFO">CFO</option>
                                <option value="CTO">CTO</option>
                                <option value="CEO">CEO</option>
                            </select>

                            <button
                                type="submit"
                                className="btn btn-outline-info btn-lg btn-block mt-5">
                                Update Member
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateBookInfo
