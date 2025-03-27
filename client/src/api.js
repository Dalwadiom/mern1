import axios from 'axios'

const post_user_api = "http://localhost:3000/api/user/postuser"
const get_user_api = "http://localhost:3000/api/user/getuser"


async function postUser(obj){
    try {
        await axios.post(post_user_api, obj)
    } catch (error) {
        console.log(error)
    }
}

async function getUser(){
    try {
        const response = await axios.get(get_user_api)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export {postUser, getUser}