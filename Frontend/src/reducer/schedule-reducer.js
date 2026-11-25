import { ACTION_TYPE } from '../actions';

const initialAccState = {
	workTime: [],
	slotDuration: 60,
};

export const scheduleReducer = (state = initialAccState, { type, payload }) => {
	switch (type) {
		case ACTION_TYPE.SET_SCHEDULE: {
			console.log(payload);
			return {
				...state,
				...payload,
			};
		}

		default:
			return state;
	}
};
