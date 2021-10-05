import axios from 'axios'
import { useState, useEffect } from 'react'

const API_KEY = 'kVQXL3SRXfnx5qnaLIDnZ7BCCXveJKLg'
const BASE_URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`

const useGif = (tag) => {
    const [gif, setGif] = useState('')

    const fetchGif = async (tag) => {
        const { data } = await axios.get(tag ? `${BASE_URL}&tag=${tag}` : BASE_URL)

        const imgSrc = data.data.images.downsized_large.url

        setGif(imgSrc)
    }

    useEffect(() => {
        fetchGif(tag)
    }, [tag])

    return { gif, fetchGif }
}

export default useGif