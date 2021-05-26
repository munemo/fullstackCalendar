import React, { useState } from 'react'
import CalendarAPIService from '../shared/api/service/CalendarAPIService'

export const RegisterView = () => {
   const [newUser, setNewUser] = useState({email: '', apartment_nr: '', password: '' })
   const [user, setUserId] = useState('')

   const [newSlot, setSlot] = useState({starttime:''})



      const registerNewUser = async () => {
        try{
            const {data} = await CalendarAPIService.registerUser(newUser)
             console.log(data)
        }
        catch(error){
        console.log('error!!!',error)
    }
    }


    const getOneUserByQuery = async () => {
        try{
            const {data} = await CalendarAPIService.oneUserByQuery(user)
             console.log(data)
        }
        catch(error){
        console.log('error!!!',error)
    }
    }

    const getOneUserByID = async () => {
        try{
            const {data} = await CalendarAPIService.oneUserByID(user)
             console.log(data)
        }
        catch(error){
        console.log('error!!!',error)
    }
    }

    const updateOneUserByID = async () => {
        try{
            const {data} = await CalendarAPIService.oneUserByID(user, newUser)
           setNewUser(user)
             console.log(data)
        }
        catch(error){
        console.log('error!!!',error)
    }
    }

    const deleteOneUser = async () => {
        try{
            const {data} = await CalendarAPIService.deleteUserByID(user)
           setNewUser(user)
             console.log(data)
        }
        catch(error){
        console.log('error!!!',error)
    }
    }

    const getAllSlots = async () => {
        try{
            const {data} = await CalendarAPIService.allSlots()
             console.log(data)
        }
        catch(error){
        console.log('error!!!',error)
    }
    }
 
 
 
    
return (
    <div>
        <h1>Register</h1>

       <input placeholder="Email" onChange={event => setNewUser({...newUser, email: event.target.value})} /><br/>
       <input placeholder="Password" onChange={event => setNewUser({...newUser, password: event.target.value})} /><br/>
       <input placeholder="Apartment number" onChange={(event) => setNewUser({...newUser, apartment_nr: event.target.value})}/><br/>
        <button onClick={() => registerNewUser()}>register</button>

        <hr/>

        <h1>Get One User By query</h1>

        <input placeholder="User ID" onChange={event => setUserId(event.target.value)} /><br/>
        <button onClick={() => getOneUserByQuery()}>Get user by query</button>

        <hr/>

        <h1>Get One User By ID</h1>

        <input placeholder="User ID" onChange={event => setUserId(event.target.value)} /><br/>
        <button onClick={() => getOneUserByID()}>Get user  by ID</button>

        <h1>Update</h1>

        <input placeholder="User ID" onChange={event => setUserId(event.target.value)} /><br/>
        <input placeholder="Email" onChange={event => setNewUser({...newUser, email: event.target.value})} /><br/>
       <input placeholder="Password" onChange={event => setNewUser({...newUser, password: event.target.value})} /><br/>
       <input placeholder="Apartment number" onChange={(event) => setNewUser({...newUser, apartment_nr: event.target.value})}/><br/>
        
        <button onClick={() => updateOneUserByID()}>Update</button>

        <h1>Delet User By ID</h1>

        <input placeholder="User ID" onChange={event => setUserId(event.target.value)} /><br/>
        <button onClick={() => deleteOneUser()}>Delete</button>

       
        <h1>Get All Slots</h1>


        <button onClick={() => getAllSlots()}>All slots</button>

<hr/>
                
    </div>
)
}
