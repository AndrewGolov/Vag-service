import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './actions';
import { request } from './utils';
import { Outlet } from 'react-router';

export const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		request('/api/account').then(({ user, error }) => {
			if (error) {
				console.error('Error fetching account data:', error);
				return;
			}
			dispatch(setUser(user));
		});
	}, [dispatch]);

	return <Outlet />;
};
