import { ACTION_TYPE } from './action-type';

export const setCars = (carData) => ({
	type: ACTION_TYPE.SET_CARS_ACC_DATA,
	payload: carData,
});
