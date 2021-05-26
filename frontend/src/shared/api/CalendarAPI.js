import Axios from 'axios'

const productionAPI = ''
const developmentAPI = 'http://localhost:3001'

const CalendarAPI = Axios.create({
    baseURL:developmentAPI

})

export default CalendarAPI