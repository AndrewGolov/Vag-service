import { ACTION_TYPE } from './action-type';

export const setSchedule = (scheduleData) => ({
	type: ACTION_TYPE.SET_SCHEDULE,
	payload: scheduleData,
});
