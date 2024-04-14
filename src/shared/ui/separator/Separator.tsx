import styles from './Separator.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface SeparatorProps {
    className?: string,
}

export default function Separator({ className }: SeparatorProps) {
	return (
		<div className={classNames(styles.Separator, {}, [className])}>
            
		</div>
	);
}