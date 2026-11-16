import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { request } from '../../../../utils';
import { selectAccCars } from '../../../../selector';
import { setCars } from '../../../../actions';
import { EmptyGarage } from '../empty-garage/empty-garage';
import { GarageGrid } from '../garage-grid/garage-grid';
import { WheelLoader, ErrorModal } from '../../../../components';

export const GarageLayout = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [serverError, setServerError] = useState(null);

	const dispatch = useDispatch();
	const garageData = useSelector(selectAccCars);
	useEffect(() => {
		request('/api/account/my-garage')
			.then(({ error, cars }) => {
				if (error) {
					throw new Error(error);
				}
				dispatch(setCars(cars));
				setIsLoading(false);
			})
			.catch((e) => {
				console.log(e);
				setServerError('Ошибка сервера, повторите попытку позже');
			})
			.finally(() => setIsLoading(false));
	}, [dispatch]);
	if (isLoading) return <WheelLoader />;

	return (
		<>
			{!serverError && (
				<div>{garageData.length === 0 ? <EmptyGarage /> : <GarageGrid carsData={garageData} />}</div>
			)}
			<ErrorModal message={serverError} isOpen={!!serverError} onClose={() => setServerError(null)} />
		</>
	);
};
