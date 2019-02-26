export const FETCH_USER = "FETCH_USER";
export const CREATE_USER = "CREATE_USER";
export const SEND_OTP = "SEND_OTP";
export const LOGIN_USER = "LOGIN_USER";
export const RECEIVE_USER = "RECEIVE_USER";

export const fetchUser = userId => ({
    type: FETCH_USER,
    userId
});

export const createUser = (email, firstname, lastname) => ({
    type: CREATE_USER,
    email,
    firstname,
    lastname
});

export const sendOTP = userId => ({
    type: SEND_OTP,
    userId
});

export const loginUser = (userId, confirmationCode) => ({
    type: LOGIN_USER,
    userId,
    confirmationCode
});

export const receiveUser = userData => ({
    type: RECEIVE_USER,
    userData
});