import { ACTION_TYPE } from './action-type';

export const deleteCar = (carId) => ({
	type: ACTION_TYPE.DELETE_CAR,
	payload: carId,
});
