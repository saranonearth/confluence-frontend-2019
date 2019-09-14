export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const logout = () => ({
    type: 'LOGOUT'
});

//FOR STARTLOGOUT AND STARTLOGIN TO BE ADDED DEPENDING ON AUTH PROVIDER