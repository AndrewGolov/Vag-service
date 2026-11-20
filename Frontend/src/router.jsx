import { createBrowserRouter } from 'react-router';
import { App } from './App';
import { Home, Auth, AccPage, Garage, Calendar } from './pages';
import { GarageLayout, CarForm } from './pages/garage/components';

export const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/login',
				element: <Auth />,
			},
			{
				path: '/register',
				element: <Auth />,
			},
			{
				path: '/account',
				element: <AccPage />,
				children: [
					{
						path: 'my-garage',
						element: <Garage />,
						children: [
							{
								index: true,
								element: <GarageLayout />,
							},
							{
								path: 'add',
								element: <CarForm />,
							},
							{
								path: ':id',
								element: <CarForm />,
							},
						],
					},
					{
						path: 'entry',
						element: <Calendar />,
					},

					{
						path: 'service',
						element: <div>Услуги</div>,
					},
				],
			},
			{
				path: '*',
				element: <div>404 Page Not Found</div>,
			},
		],
	},
]);
