import streams from '../apis/streams'

export const sighIn = (userId) => {
    return {
        type: 'SIGN_IN',
        payload: userId
    }
}

export const sighOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}

export const createStream = (formValues) => async (dispatch) => {
    streams.post('/streams', formValues)
}