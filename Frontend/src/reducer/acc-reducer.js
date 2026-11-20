import { ACTION_TYPE } from '../actions';

const initialAccState = {
	cars: [],
	serverError: null,
	isLoading: false,
	modal: { isOpen: false, text: '' },
};

export const accReducer = (state = initialAccState, { type, payload }) => {
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
		case ACTION_TYPE.DELETE_CAR: {
			return {
				...state,
				cars: state.cars.filter((car) => car.id !== payload),
			};
		}
		case ACTION_TYPE.SET_ERROR_SERVER: {
			return {
				...state,
				serverError: payload,
			};
		}
		case ACTION_TYPE.RESET_ERROR_SERVER: {
			return {
				...state,
				serverError: null,
			};
		}
		case ACTION_TYPE.SET_IS_LOADING: {
			return {
				...state,
				isLoading: true,
			};
		}
		case ACTION_TYPE.SET_LOADED: {
			return {
				...state,
				isLoading: false,
			};
		}
		case ACTION_TYPE.OPEN_MODAL: {
			return {
				...state,
				modal: {
					...state.modal,
					...payload,
					isOpen: true,
				},
			};
		}
		case ACTION_TYPE.CLOSE_MODAL: {
			return {
				...state,
				modal: initialAccState.modal,
			};
		}

		default:
			return state;
	}
};
