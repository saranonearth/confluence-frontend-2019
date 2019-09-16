import {
    createContext
} from 'react';

const Store = createContext({
    user: null,
    isAuth: false,
    token: null
})

export default Store;