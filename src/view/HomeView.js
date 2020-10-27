import React from 'react'
import Axios from 'axios'

export const HomeView = () => {

    const fetchDataFromExternalAPI = () => {
        Axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
            .then((response) => console.log(response))
            .catch((error) => console.log(error))
    }

    return (
        <div>
            <button onClick={() => fetchDataFromExternalAPI()}>Make API call!</button>
        </div>
    )
}