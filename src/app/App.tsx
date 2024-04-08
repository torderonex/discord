import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import './styles/index.scss';
import { AppRouter } from './providers/RouteProvider';
export default function App () {
	const { theme } = useTheme();  
	return (
		<div className={classNames('app', {}, [theme])}>
			<div className='page-content'>
				<AppRouter/>
			</div>
		</div>
	);
}