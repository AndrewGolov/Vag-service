import { createBrowserRouter } from 'react-router';
import { Home, AuthPage } from './pages';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/login',
		element: <AuthPage />,
	},
	{
		path: '/register',
		element: <AuthPage />,
	},
	{
		path: '*',
		element: <div>404 Page Not Found</div>,
	},
]);
