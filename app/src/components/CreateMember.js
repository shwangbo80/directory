import React, {Component} from "react"
import {Link} from "react-router-dom"
import "../App.css"
import axios from "axios"

class CreateBook extends Component {
    constructor() {
        super()
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
            .post("http://localhost:8082/api/members", data)
            .then((res) => {
                this.setState({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    location: "",
                    registered_date: "",
                    title: "",
                })
                this.props.history.push("/show-members")
            })
            .catch((err) => {
                console.log("Error in CreateBook!")
            })
    }

    render() {
        return (
            <div className="CreateBook">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <br />
                            <Link
                                to="/show-members"
                                className="btn btn-outline-primary float-left">
                                Show Directory List
                            </Link>
                        </div>
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">
                                Add Member
                            </h1>
                            <p className="lead text-center">
                                Create new member
                            </p>

                            <form noValidate onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        name="firstName"
                                        className="form-control"
                                        value={this.state.firstName}
                                        onChange={this.onChange}
                                    />
                                </div>

                                <div className="form-group">
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
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        className="form-control"
                                        value={this.state.email}
                                        onChange={this.onChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="phone"
                                        placeholder="Phone"
                                        name="phone"
                                        className="form-control"
                                        value={this.state.phone}
                                        onChange={this.onChange}
                                    />
                                </div>

                                <div className="form-group">
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
                                    <input
                                        type="date"
                                        placeholder="registered_date"
                                        name="registered_date"
                                        className="form-control"
                                        value={this.state.registered_date}
                                        onChange={this.onChange}
                                    />
                                </div>
                                {/* <div className="form-group">
                                    <input
                                        type="text"
                                        placeholder="Job Title"
                                        name="title"
                                        className="form-control"
                                        value={this.state.title}
                                        onChange={this.onChange}
                                    />
                                </div> */}
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
                                    <option value="Accounting">
                                        Accounting
                                    </option>
                                    <option value="Senior Developer">
                                        Senior Developer
                                    </option>
                                    <option value="CFO">CFO</option>
                                    <option value="CTO">CTO</option>
                                    <option value="CEO">CEO</option>
                                </select>
                                <input
                                    type="submit"
                                    className="btn btn-outline-primary btn-block mt-4"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateBook
