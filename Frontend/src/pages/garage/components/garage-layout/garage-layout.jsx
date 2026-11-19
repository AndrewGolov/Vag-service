import { useSelector, useDispatch } from 'react-redux';
import { selectAccCars, selectIsLoading } from '../../../../selector';
import { EmptyGarage } from '../empty-garage/empty-garage';
import { GarageGrid } from '../garage-grid/garage-grid';
import { request } from '../../../../utils';
import { WheelLoader } from '../../../../components';
import { useEffect } from 'react';
import { setCars, setServerError, setLoading, setLoaded } from '../../../../actions';

export const GarageLayout = () => {
	const garageData = useSelector(selectAccCars);
	const dispatch = useDispatch();
	const isLoading = useSelector(selectIsLoading);

	useEffect(() => {
		dispatch(setLoading());
		request('/api/account/my-garage')
			.then(({ error, cars }) => {
				if (error) {
					throw new Error(error);
				}
				dispatch(setCars(cars));
			})
			.catch((e) => {
				console.log(e);
				dispatch(setServerError('Ошибка сервера, повторите попытку позже'));
			})
			.finally(() => dispatch(setLoaded()));
	}, [dispatch]);

	if (isLoading) return <WheelLoader />;
	return <div>{garageData.length === 0 ? <EmptyGarage /> : <GarageGrid carsData={garageData} />}</div>;
};
