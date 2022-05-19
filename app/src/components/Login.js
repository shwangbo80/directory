import React from "react"
import {Link} from "react-router-dom"

export default function Login() {
    return (
        <div className="container mt-5 pt-5">
            <h2 className="text-center">Member Directory</h2>
            <div className="row mt-5">
                <div className="col-4"></div>
                <form className="col-4">
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                        />
                        <small id="emailHelp" className="form-text text-muted">
                            We'll never share your email with anyone else.
                        </small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                        />
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                        />
                        <label className="form-check-label" for="exampleCheck1">
                            Remember Me
                        </label>
                    </div>
                    <Link
                        to="/show-members"
                        type="submit"
                        className="btn btn-primary">
                        Submit
                    </Link>
                </form>
                <div className="col-4"></div>
            </div>
        </div>
    )
}
