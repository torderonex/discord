import styles from './Spinner.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface SpinnerProps{
    className? : string, 
}

export default function Spinner({ className } : SpinnerProps) {
	return (
		<div className={classNames(styles.Spinner,{},[className])}>
			<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
		</div>
	);
}