import Spinner from 'shared/ui/spinner/Spinner';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Loader.module.scss';

interface LoaderProps{
    className? : string, 
}

export default function Loader({ className } : LoaderProps) {
	return (
		<div className={classNames(styles.Loader,{},[className])}>
			<Spinner/>
		</div>
	);
}