import React, { useState } from 'react'

export const SignInView = () => {

    const [loggedInUser, setLoggedInUser] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            <span>Username: </span><input onChange={event => setLoggedInUser(event.target.value)} /> <br />
            <span>Password: </span><input type="password" onChange={event => setPassword(event.target.value)} /> <br />
            <button>Login</button>
        </div >
    )
}