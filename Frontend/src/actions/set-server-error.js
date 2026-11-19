import { ACTION_TYPE } from './action-type';

export const setServerError = (error) => ({
	type: ACTION_TYPE.SET_ERROR_SERVER,
	payload: error,
});
