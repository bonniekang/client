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