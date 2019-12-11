import { ALERTS } from '../_constants/alerts';

export const alertActions = {
    success,
    error,
    clear
};

function success(message) {
    return { type: ALERTS.SUCCESS, message };
}

function error(message) {
    return { type: ALERTS.ERROR, message };
}

function clear() {
    return { type: ALERTS.CLEAR };
}