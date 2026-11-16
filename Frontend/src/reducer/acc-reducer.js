import { ACTION_TYPE } from '../actions';

const initialUserState = {
	cars: [],
};

export const accReducer = (state = initialUserState, { type, payload }) => {
	switch (type) {
		case ACTION_TYPE.ADD_CAR_ACC_DATA: {
			return {
				...state,
				cars: [...state.cars, payload],
			};
		}
		case ACTION_TYPE.SET_CARS_ACC_DATA: {
			return {
				...state,
				cars: payload,
			};
		}

		default:
			return state;
	}
};
