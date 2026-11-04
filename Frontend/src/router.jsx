import { createBrowserRouter } from 'react-router';
import { App } from './App';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/login',
		element: <div>Login Page</div>,
	},
	{
		path: '/register',
		element: <div>Register Page</div>,
	},
	{
		path: '*',
		element: <div>404 Page Not Found</div>,
	},
]);
