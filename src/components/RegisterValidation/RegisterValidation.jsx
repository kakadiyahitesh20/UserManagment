import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {userConfirmation} from "../../actions/loginAction";
import queryString from 'query-string'


class RegisterValidation extends React.Component {

    componentDidMount() {
        const emailVal = queryString.parse(this.props.location.search);
        debugger
        function getAll() {
            return dispatch => {
                dispatch(userConfirmation(emailVal.email));

            };
        }

        this.props.dispatch(getAll());
    }


    render() {
        return(
            <div>
                <h1>Home page</h1>
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

const connectedRegisterValidation = connect(mapStateToProps)(RegisterValidation);
export { connectedRegisterValidation as RegisterValidation };