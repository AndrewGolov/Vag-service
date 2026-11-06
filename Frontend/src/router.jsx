import { createBrowserRouter } from 'react-router';
import { Home, Auth } from './pages';

export const router = createBrowserRouter([
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
		path: '*',
		element: <div>404 Page Not Found</div>,
	},
]);
