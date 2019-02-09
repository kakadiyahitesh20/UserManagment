import {userConstants} from "../_constants/user.constants";
import {checkUserLogin, log_out, createUser,userConfirmationAction} from "./userActions";
import {Link} from "react-router/es/Link";
import {browserHistory} from 'react-router';



/*  ---------------------------------------------------------------
       LOGIN ACTION FOR USER
     ---------------------------------------------------------------*/

export function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

       var result = checkUserLogin({email: username, password: password})
       .then(
                user => {
                    // login successful if there's object the response
                    if (user[0] !== undefined) {
                        localStorage.setItem('user', JSON.stringify(user));
                        dispatch(success(user));
                        browserHistory.push('/Home');
                    }
                    else{
                        dispatch(failure('User not found'));
                    }
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}


/*  ---------------------------------------------------------------
       LOGOUT ACTION
     ---------------------------------------------------------------*/

export function logout() {
    log_out();
    return { type: userConstants.LOGOUT };
}

/*  ---------------------------------------------------------------
       REGISTER ACTION
     ---------------------------------------------------------------*/

export function register(user) {
    return dispatch => {
        dispatch(request(user))
        console.log('user register ...', user);
       var result =  createUser(user)
           .then(
           response => {
               console.log(response);
               if (response.status == 200) {
                   dispatch(success(response.data));
                   browserHistory.push('/');
               }
               else{
                   dispatch(failure('registration failed'));
               }
           },
           error => {
               dispatch(failure(error));
           }
       );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

/*  ---------------------------------------------------------------
       USER REGISTRATION CONFIRMATION ACTION
     ---------------------------------------------------------------*/

export function userConfirmation(email) {
    return dispatch => {
        dispatch(request())
        var result =  userConfirmationAction(email)
            .then(
                response => {
            console.log(response);
        if (response) {

            browserHistory.push('/');
        }
        else{
            dispatch(failure('registration failed'));
        }
    },
        error => {
            dispatch(failure(error));
        }
    );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}