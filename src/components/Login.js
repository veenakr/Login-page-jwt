import React from 'react';
import './Login.css';
import AuthService from './AuthService';

class Login extends React.Component {
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);
        this.Auth = new AuthService();
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentWillMount() {
        if(this.Auth.loggedIn()){
            this.props.history.replace('/');
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleFormSubmit(e) {
        e.preventDefault();
        this.Auth.login(this.state.username, this.state.password)
        .then(res => {
            this.props.history.replace('/');
        })
        .catch(err => {
            alert(err);
        })
    }
    render() {
        return(
            <div className="center">
                <div className="card">
                    <h1>Login</h1>
                    <form onSubmit={this.handleFormSubmit}>
                        <input className="form-item" type="text" placeholder="Enter UserName" name="username" onChange={this.handleChange} />
                        <input className="form-item" type="password" placeholder="Enter Password" name="password" onChange={this.handleChange} />
                        <button className="form-submit" type="submit" name="submit">SUBMIT</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;