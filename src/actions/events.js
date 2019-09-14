export const successEvents = (payload) => ({
    type: 'FETCH_EVENTS_SUCCESS',
    payload
})

export const failureEvents = () => ({
    type: 'FETCH_EVENTS_FAILURE',
})
