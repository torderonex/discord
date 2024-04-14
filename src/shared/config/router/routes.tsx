import { LoginPage } from 'pages/login-page';
import { MainPage } from 'pages/main-page';
import { NotFoundPage } from 'pages/not-found';
import { SettingsPage } from 'pages/settings-page';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes{
    LOGIN = 'login',
    CHANNELS = 'channels',
	SETTINGS = 'settings',
    NOT_FOUND = 'not_found'
}


export const routePath : Record<AppRoutes,string> = {
	[AppRoutes.LOGIN] : '/',
	[AppRoutes.SETTINGS] : '/settings',
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
		path : routePath.settings,
		element : <SettingsPage/>,
	},
	{
		path : routePath.not_found,
		element : <NotFoundPage/>,
	}
];