import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../Actions/user.actions';
import Nav from './Nav';
import './homes.css';


class Login extends React.Component {
    constructor(props) {
        super(props);

        //reset login status
        //this.props.dispatch(userActions.logout());

        this.state = {
            email: '',
            password: '',
            submitted: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { email, password } = this.state;
        const { dispatch } = this.props;
        if (email && password) {
            dispatch(userActions.login(email, password));
        }
    }
    


    render() {
        const { loggingIn } = this.props;
        const { email, password, submitted } = this.state;
        return(
            <div className="container-fluid">
                <Nav />
                <form onSubmit={this.handleSubmit} className="formWidth">
                    <div className="loginDiv">
                    <h3>Nash like a native</h3>
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input value={email} onChange={this.handleChange} name="email" type="text" className="form-control" placeholder="Enter email" />
                        {submitted && !email &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input name="password"  
                        type="password" 
                        className="form-control" 
                        placeholder="Enter password" 
                        value={password}
                        onChange={this.handleChange} />
                        {submitted && !password &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
    
                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>
    
                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                    {loggingIn && 
                    <h3>Logging In</h3>
                    }
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                    
                </form>
            </div>
        )

    }
    
}


function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const connectedLoginPage = connect(mapStateToProps)(Login);
export { connectedLoginPage as Login };






