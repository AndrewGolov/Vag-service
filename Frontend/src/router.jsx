import { createBrowserRouter } from 'react-router';
import { App } from './App';
import { Home, Auth, AccPage, Garage } from './pages';
import { EmptyGarage, AddingCarForm } from './pages/garage/components';

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
								element: <EmptyGarage />,
							},
							{
								path: 'add',
								element: <AddingCarForm />,
							},
						],
					},
					{
						path: 'entry',
						element: <div>Календарь</div>,
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
