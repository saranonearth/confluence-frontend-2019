import axios from 'axios'
import config from '../config.json'
export const auth = async (dispatch, tokenId, user) => {
    try {

        const configu = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const body = {
            idToken: tokenId
        }

        const res = await axios.post(`${config.BASE}/user/login/`, body, configu)
        dispatch({
            type: 'LOGIN',
            payload: res.data.data
        })
    } catch (error) {
        // handle with react-alert
        console.log(error)
    }
}