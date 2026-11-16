import { ACTION_TYPE } from './action-type';

export const addCar = (carData) => ({
	type: ACTION_TYPE.ADD_CAR_ACC_DATA,
	payload: carData,
});
