import React from 'react'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import Calendar from 'react-calendar'
import RoutingPath from '../../routes/RoutingPath'
import 'react-calendar/dist/Calendar.css';

export const Kalendar = () => {

    const [date, setDate] = useState(new Date())
    const history = useHistory()
  
    const chooseDate = date => {   
        setDate(date)
        console.log(date.toLocaleDateString('sv-se'))
        }

    return (
        <div>
          <Calendar    showWeekNumbers onChange={chooseDate} value={date}/> <br></br>  
         <button onClick={() =>  history.push(RoutingPath.bookingView, {swedishDate: date.toLocaleDateString('sv-se')})}>book</button>
        </div>
    )
}
