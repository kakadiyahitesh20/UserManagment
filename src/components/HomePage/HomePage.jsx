import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {userConstants} from "../../_constants/user.constants";

class HomePage extends React.Component {
    login(username, password) {
        return dispatch => {
            dispatch(request({ username }));

        };

        function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    }


    componentDidMount() {
        function getAll() {
            return dispatch => {
                dispatch(request());

            };

            function request() { return { type: userConstants.GETALL_REQUEST } }
            function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
            function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
        }

        this.props.dispatch(getAll());
    }
    render() {
        return(
            <div>
                <h1>Home page</h1>
                <a href="">Logout</a>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };