import { CHAR_ALL_REQUEST, CHAR_ALL_SUCCESS, CHAR_ALL_ERROR, SINGLE_CHAR_REQUEST,
    SINGLE_CHAR_SUCCESS, SINGLE_CHAR_ERROR
} from '../actionType/actionType';
    
export const CharAllReq = () => {
    return {
        type: CHAR_ALL_REQUEST
    }
}

export const CharAllSuccess = (data) => {
    return {
        type: CHAR_ALL_SUCCESS,
        payload: data
    }
}

export const CharAllError = (error) => {
    return {
        type: CHAR_ALL_ERROR,
        payload: error
    }
}

export const SingleCharRequest = () => {
    return {
        type: SINGLE_CHAR_REQUEST
    }
}

export const SingleCharSuccess = (data) => {
    return {
        type: SINGLE_CHAR_SUCCESS,
        payload: data
    }
}

export const SingleCharError = (error) => {
    return {
        type: SINGLE_CHAR_ERROR,
        payload: error
    }
}