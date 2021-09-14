import axios from 'axios'

const KEY = 'AIzaSyAFwWCRIwPl1sq7bzRhZiOd2GETA8Ziqi8'


export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})
