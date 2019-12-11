import {SUCCESS, ERROR, CLEAR} from './constants'

export const alertActions = {
    success,
    error,
    clear
};

function success(message) {
    return { type: SUCCESS.SUCCESS, message };
}

function error(message) {
    return { type: ERROR.ERROR, message };
}

function clear() {
    return { type: CLEAR.CLEAR };
}