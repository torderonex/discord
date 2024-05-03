import { classNames } from 'shared/lib/classNames/classNames';
import styles from './MessageBar.module.scss';
 
 interface MessageBarProps{
   className? : string,
 }
 
export default function MessageBar({ className } : MessageBarProps) {
	return (
		<div className={classNames(styles.MessageBar,{},[className])}>
            hello
		</div>
	);
}