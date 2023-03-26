import axios from "axios";
import React from "react";
import FetchAssetsResponse from "../models/FetchAssetsResponse";



async function getData(limit: number = 20): Promise<FetchAssetsResponse|undefined>{

    const options = {
        method: 'GET',
        url: 'https://opensea13.p.rapidapi.com/assets',
        params: {
            limit: limit
        },
        headers: {
            'X-RapidAPI-Key': 'c467bf97b5msh8edd1ae591cf776p1ef304jsn5cb48f373061',
            'X-RapidAPI-Host': 'opensea13.p.rapidapi.com',
        },
    };
    try {
        const response = await axios.request(options)
        console.log(response.data)

        return response.data
        
        

    } catch (error) {
        console.error(error);

    }

}

export default getData