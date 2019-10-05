import jwt from 'jsonwebtoken'
import config from '../config.json'
export default function rootReducer(state, action) {
    const {
        type,
        payload
    } = action;

    switch (type) {
        case 'LOGIN':
            localStorage.setItem('cToken', payload)
            console.log(payload)
            const user = jwt.verify(payload, config.JWTKEY)
            console.log(user)
            return {
                ...state,
                token: payload,
                    user,
                    isAuth: true,
            }
            case 'LOGOUT':
                localStorage.removeItem('cToken')
                return {
                    token: null,
                        isAuth: false,
                        user: null
                }
                default:
                    return state
    }
}