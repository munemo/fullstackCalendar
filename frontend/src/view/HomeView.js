
import React from 'react'
import {Kalendar} from '../components/Kalendar/Kalendar'
import {useHistory, useLocation} from 'react-router-dom'
import RoutingPath from '../routes/RoutingPath'

export const HomeView = () => {

    return (
        <div>
            
            <Kalendar/>
        </div>
    )
}
