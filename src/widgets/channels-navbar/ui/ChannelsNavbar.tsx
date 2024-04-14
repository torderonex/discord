import styles from './ChannelsNavbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface ChannelsNavbarProps {
    className?: string,
}

export default function ChannelsNavbar({ className }: ChannelsNavbarProps) {
	return (
		<div className={classNames(styles.ChannelsNavbar, {}, [className])}>
			{'тест'}
		</div>
	);
}