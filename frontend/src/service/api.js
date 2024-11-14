import axios from "axios"


const API_URI = 'https://notfile-backend.onrender.com' 

export const uploadFile = async (data) => {
    try {
        const res = await axios.post(`${API_URI}/upload`, data)
        return res.data
    } catch (error) {
        console.log('Error while calling the API', error.message)
    }
}
