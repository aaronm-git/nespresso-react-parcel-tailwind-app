import { createRoot } from 'react-dom/client';
import { App } from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/recipes',
				children: [
					{
						path: '/recipes/:id',
					},
				],
			},
		],
	},
]);

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<RouterProvider router={router} />);
