import { ALERTS } from './constants';

export const ALERTS = {
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