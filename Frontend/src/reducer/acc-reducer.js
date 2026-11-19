import { ACTION_TYPE } from '../actions';

const initialUserState = {
	cars: [],
	serverError: null,
	modalIsOpen: false,
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
		case ACTION_TYPE.UPDATE_CAR: {
			return {
				...state,
				cars: state.cars.map((car) => (car.id === payload.id ? payload : car)),
			};
		}

		default:
			return state;
	}
};
