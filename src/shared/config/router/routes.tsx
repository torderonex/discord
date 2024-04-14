import LoginPage from 'pages/login-page/ui/LoginPage';
import MainPage from 'pages/main-page/ui/MainPage';
import { NotFoundPage } from 'pages/not-found';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes{
    LOGIN = 'login',
    CHANNELS = 'channels',
    NOT_FOUND = 'not_found'
}


export const routePath : Record<AppRoutes,string> = {
	[AppRoutes.LOGIN] : '/',
	[AppRoutes.CHANNELS] : '/channels',
	[AppRoutes.NOT_FOUND] : '*'
};

export const routeConfig : RouteProps[] = [
	{
		path : routePath.login,
		element : <LoginPage/>,
	},
	{
		path : routePath.channels,
		element : <MainPage/>,
	},
	{
		path : routePath.not_found,
		element : <NotFoundPage/>,
	}
];