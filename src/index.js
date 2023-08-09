import { createRoot } from 'react-dom/client';
import { App } from './App';
import { createHashRouter, createBrowserRouter, RouterProvider, HashRouter } from 'react-router-dom';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
	<HashRouter>
		<App />
	</HashRouter>,
);
