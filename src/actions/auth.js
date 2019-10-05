
import axios from 'axios'

export const auth = async (dispatch, tokenId, user) => {
    try {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const body = {
            idToken: tokenId
        }

        const res = await axios.post('http://confluence-backend.appspot.com/api/user/login/', body, config)
        dispatch({
            type: 'LOGIN',
            payload: res.data.data
        })
    } catch (error) {
        // handle with react-alert
        console.log(error)
    }
}