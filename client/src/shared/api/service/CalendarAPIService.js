import http from '../CalendarAPI'

const registerUser = (userData) => {
    return http.post('/user', userData)    
}

const oneUserByQuery = (email) => {
    return http.get(`/user/query?email=${email}`)    
}

const oneUserByID = (id) => {
    return http.get(`/user/find/${id}`)    
}

const updateUserByID = (id, userData) => {
    return http.put(`/user/find/${id}`,userData)    
}

const deleteUserByID = (id) => {
    return http.delete(`/user/${id}`)    
}

const createSlot = (slotData) => {
    return http.post('/slot', slotData)    
}

const allSlots = () => {
    return http.get('/slots/all')    
}



const allUsers = () => {
    return http.get('/user/all')    
}

export default {
    registerUser,
    oneUserByQuery,
    oneUserByID,
    updateUserByID,
    deleteUserByID,
    createSlot,
    allSlots,
    allUsers
   
   
}