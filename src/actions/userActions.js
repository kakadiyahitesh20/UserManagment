import axios from 'axios';


let config = {'api-key': 'RReio98$3#hsdhfDFSe31&sE4e5665DGs'};


/*  ---------------------------------------------------------------
         Create New User
         Params: userInfo - the user to create
         Return: successful user creation
         Effects: None;
     ---------------------------------------------------------------*/

export function createUser(user) {
     console.log('user inside: ', user);
    let userObj = {
        "name": user.name,
        "email": user.email,
        "dob": user.dob,
        "status" : "Inactive",
        "password": user.password
    };

    return axios.post('http://localhost:8098/createNewUser',userObj, {
        headers: config
    })
        .then(function (response) {
            return(response);
        })
        .catch(function (error) {
            return(error);
        });
}

/*  ---------------------------------------------------------------
         Confirm User link for registration
         Params: Email - the user email
         Return: successful user validation
         Effects: None;
     ---------------------------------------------------------------*/

export function  userConfirmationAction(email) {
    console.log('userConfirmation: ');
    let userObj = {
        "email" : email,
        "status" : "Active"
    };
    return axios.post('http://localhost:8098/updateUserInfo',userObj, {
        headers: config
    })
        .then(function (response) {
            return(response);
        })
        .catch(function (error) {
            return(error);
        });
}

/*  ---------------------------------------------------------------
         Check user login credentails
         Params: Email - the user email
         Params: password - the user password
         Return: successful user logged
         Effects: None;
     ---------------------------------------------------------------*/


export function checkUserLogin(user) {
    const requestOptions = {
        method: 'GET',
        headers: config
    };
    return fetch('http://localhost:8098/checkUserLogin/'+user.email+'/'+user.password, requestOptions)
        .then(response => {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }
            return response.json();
        })
        .then(user => {

            return user;
        });
}

/*  ---------------------------------------------------------------
      Logout user form system
      Return: successful user logout
      Effects: None;
     ---------------------------------------------------------------*/


export function log_out() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}