import { request } from '../../../../../utils';

export const saveCar = (carData, editCarId) =>
	editCarId
		? request(`/api/my-garage/${editCarId}`, 'PATCH', carData)
		: request('/api/my-garage/add', 'POST', carData);
