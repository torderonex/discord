import { classNames } from 'shared/lib/classNames/classNames';
import styles from './MyAccountSettings.module.scss';

interface MyAccountSettingsProps{
  className? : string,
}

export default function MyAccountSettings({ className } : MyAccountSettingsProps) {
	return (
		<div className={classNames(styles.MyAccountSettings,{},[className])}>
		</div>
	);
}