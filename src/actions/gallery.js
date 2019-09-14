
export const successGallery = (payload) => ({
    type: 'FETCH_GALLERY_SUCCESS',
    payload
})

export const failureGallery = () => ({
    type: 'FETCH_GALLERY_FAILURE',
})
