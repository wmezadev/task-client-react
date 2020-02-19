import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NewAccount = () => {
// State for login
const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirm: ''
    });

    const { name, email, password, confirm } = user;

    const onChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = e => {
        e.preventDefault();

        // validate
        // pass to action (reducer)
    }

    return ( 
        <div className="form-user">
            <div className="container-form shadow-dark">
                <h1>Sign Up</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className="field-form">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your name"
                            value={name}
                            onChange={onChange}
                            autoComplete="none"
                        />
                    </div>
                    <div className="field-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={onChange}
                            autoComplete="none"
                        />
                    </div>
                    <div className="field-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Your password"
                            value={password}
                            onChange={onChange}
                            autoComplete="none"
                        />
                    </div>
                    <div className="field-form">
                        <label htmlFor="confirm">Confirm password</label>
                        <input
                            type="password"
                            id="confirm"
                            name="confirm"
                            placeholder="Confirm password"
                            value={confirm}
                            onChange={onChange}
                            autoComplete="none"
                        />
                    </div>
                    <div className="field-form">
                        <button className="btn btn-primary btn-block">Sign Up</button>
                    </div>
                </form>
                <Link to={'/new-account'} className="account-link">
                    Sign Up
                </Link>
            </div>
        </div>
    );
}
 
export default NewAccount;