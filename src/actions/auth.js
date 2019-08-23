export const login = (username, password) => {
    return (dispatch, getState) => {
        let headers = { "Content-Type": "application/json" };
        let body = JSON.stringify({ username, password });

        return fetch("http://127.0.0.1:8000/user/login/", { headers, body, method: "POST" })
            .then(res => {
                if (res.status < 500) {
                    return res.json().then(data => {
                        return { status: res.status, data };
                    })
                } else {
                    console.log("Server Error!");
                    throw res;
                }
            })
            .then(res => {
                if (res.status === 200) {
                    dispatch({ type: 'LOGIN_SUCCESSFUL', data: res.data });
                    return res.data;
                } else if (res.status === 404 || res.status === 400) {
                    dispatch({ type: "AUTHENTICATION_ERROR", data: res.data });
                    throw res.data;
                } else {
                    dispatch({ type: "LOGIN_FAILED", data: res.data });
                    throw res.data;
                }
            })
    }
}

export const register = (username, email, password, password2) => {
    return (dispatch, getState) => {
        let headers = { "Content-Type": "application/json" }
        let body = JSON.stringify({ username, email, password, password2 })

        return fetch("http://127.0.0.1:8000/user/signup/", { headers, body, method: "POST" })
            .then(res => {
                if (res.status < 500) {
                    return res.json().then(data => {
                        return { status: res.status, data }
                    })
                } else {
                    console.log("Server Error!")
                }
            })
            .then(res => {
                if (res.status === 201) {
                    dispatch({ type: 'REGISTRATION_SUCCESSFUL', data: res.data })
                    return res.data
                } else if (res.status === 400) {
                    dispatch({ type: "AUTHENTICATION_ERROR", data: res.data })
                    throw res.data
                } else {
                    dispatch({
                        type: "REGISTRATION_FAILED", data: res.data
                    })
                    throw res.data
                }
            })
    }
}
export const resetPassword = (Old_Password, New_Password, New_Password2) => {
    console.log("resetting")
    return (dispatch, getState) => {
        let headers = { "Content-Type": "application/json" }
        headers.Authorization = "JWT " + localStorage.getItem("token")
        console.log(Old_Password, New_Password)
        let body = JSON.stringify({ Old_Password, New_Password, New_Password2 })
        console.log("fetch")
        return fetch("http://127.0.0.1:8000/user/resetpassword/", { headers, body, method: "POST" })
            .then(res => {
                if (res.status < 500) {
                    return res.json().then(data => {
                        return { status: res.status, data }
                    })
                } else {
                    console.log("Server Error!")
                }
            }).then(res => {
                if (res.status === 200) {
                    console.log("password changed")
                    dispatch({ type: "PASSWORD_CHANGED", data: res.data })
                } else if (res.status === 400) {
                    dispatch({ type: "PASSWORD_MISMATCH", data: res.data })
                }
            })
    }
}

export const forgotPassword = (username) => {
    return (dispatch, getState) => {
        let headers = { "Content-Type": "application/json" }
        let body = JSON.stringify({ username })
        return fetch("http://127.0.0.1:8000/user/forgotpass/", { headers, body, method: "POST" })
            .then(res => {
                if (res.status < 500) {
                    return res.json().then(data => {
                        return { status: res.status, data }
                    })
                } else {
                    console.log("server error")
                }
            })
            .then(res => {
                if (res.status == 200) {
                    dispatch({ type: "USER_FOUND" })
                }
            })
    }
}
export const signout = () => {
    return {
        type: "LOGOUT_SUCCESSFUL"
    }
} 
