import React from 'react'
import {useHistory, useLocation} from 'react-router-dom'
import {useEffect, useState} from 'react'
import RoutingPath from '../routes/RoutingPath'
import CalendarAPIService from '../shared/api/service/CalendarAPIService'

export const BookingView = () => {

    const location = useLocation()
    const history = useHistory()
    const [booking, setBooking] = useState({date:'', starttime:''})


    useEffect(() => {
              
        if(!location.state?.swedishDate){
            history.push(RoutingPath.HomeView)
            }

      })
    
   
    const handleClick = (e) => {

            e.preventDefault()
            setBooking({...booking, starttime: e.target.value}) 
            console.log(booking)



     
    } 


    return (
        <div>
            <h1>Date : {location.state?.swedishDate}</h1>
            <span onClick={(e) => handleClick(e)} value={'07:00'}>07:00</span>
        </div>
    )
}


