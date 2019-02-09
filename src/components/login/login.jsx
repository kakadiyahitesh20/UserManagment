import React from 'react'
import Link from "react-router/es/Link";
import { connect } from 'react-redux';
import {userConstants} from "../../_constants/user.constants";
import {login, logout} from "../../actions/loginAction";

class Login extends React.Component {
    constructor(props) {
        super(props);
        // reset login status
       this.props.dispatch(logout());

        this.state = {
            username: '',
            password: '',
            submitted: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        const { dispatch } = this.props;
        if (username && password) {
        dispatch(login(username, password));
        }
    }

    render() {
        const { loggingIn,authentication } = this.props;
        const { username, password, submitted } = this.state;
        var names = [{"_id":"5a3d5d64a3ee3c18b8670bb0","updatedAt":"2017-12-22T19:30:44.485Z","createdAt":"2017-12-22T19:30:44.485Z","Name":"Hitesh Kakadiya","Email":"kakadiyahitesh20@gmail.com","dob":"2017-12-22T00:00:00.000Z","password":"Hitesh20@293","__v":0}];
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                        {submitted && !username &&
                        <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                        {submitted && !password &&
                        <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>
                        {loggingIn &&
                        <img src="" />
                        }
                        <Link to="/register" className="btn btn-link">Register</Link>
                    </div>
                </form>
                {loggingIn}
            </div>

        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn,
        user : state.user
    };
}

const connectedLoginPage = connect(mapStateToProps)(Login);
export { connectedLoginPage as Login };
//export default Login;