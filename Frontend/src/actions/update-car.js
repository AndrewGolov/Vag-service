import { ACTION_TYPE } from './action-type';

export const updateCar = (carData) => ({
	type: ACTION_TYPE.UPDATE_CAR,
	payload: carData,
});
