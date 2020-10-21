import React, { useContext } from 'react'
import { UserContext } from '../../shared/global/provider/UserProvider'
import './Profile.css'

export const Profile = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    return (
        <div className="profileWrapper">
            <img className="profileImg" src={"https://www.thispersondoesnotexist.com/image"} alt="" />
            <span className="displayedUsername">{authenticatedUser}</span>
        </div>
    )
}