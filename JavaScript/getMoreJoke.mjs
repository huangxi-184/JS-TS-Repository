import axios from 'axios'

const headers = {
    'Content-Type': 'application/json'
};

const startPost = async () => {
    try {
        let data = await axios.get('https://api.vvhan.com/api/joke', { headers })
        console.log(data.data)
    } catch (error) {

    }
}

setInterval(() => {
    startPost()
}, 10000, true)
