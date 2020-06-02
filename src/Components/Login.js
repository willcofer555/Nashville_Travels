import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from './Nav';
import './homes.css';


class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
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
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password);
        }
    }
    


    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return(
            <div className="container-fluid">
                <Nav />
                <form className="formWidth">
                    <div className="loginDiv">
                    <h3>Welcome Home. </h3>
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>
    
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>
    
                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>
    
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                </form>
            </div>
        )

    }
    
}

/*function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};
const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
export { connectedLoginPage as Login }*/

export default Login;




