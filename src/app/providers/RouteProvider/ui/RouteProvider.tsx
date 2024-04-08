import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/router/routes';
import { Loader } from 'widgets/loader';

export function RouteProvider() {
	return (
		<Routes>
			{
				routeConfig.map(({ path, element }) => 
					<Route
						element={
							<Suspense fallback={<Loader/>}>
								{element}
							</Suspense>
						} 
						path={path}
						key={path}/>
				)  
			}
		</Routes>
	);
}