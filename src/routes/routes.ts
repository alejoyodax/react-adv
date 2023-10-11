import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

interface Route {
	to: string;
	path: string;
	Component: () => JSX.Element;
	name: string;
}


export const routes: Route[] = [
	{
		to: '/lazy1',
		path: 'lazy1',
		Component: LazyPage1,
		name: 'Lazy-1'
	},
	{
		to: '/lazy1',
		path: 'lazy1',
		Component: LazyPage1,
		name: 'Lazy-1'
	},
	{
		to: '/lazy1',
		path: 'lazy1',
		Component: LazyPage1,
		name: 'Lazy-1'
	}
];