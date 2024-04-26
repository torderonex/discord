import styles from './AvatarCircle.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import OnlineIndicator from 'shared/assets/user-status/online.svg';
// import DontDistIndicator from 'shared/assets/user-status/donotdisturb.svg';
// import InvisibleIndicator from 'shared/assets/user-status/invisible.svg';

interface AvatarCircleProps extends React.PropsWithChildren {
    className?: string,
    children : React.ReactElement
}

export default function AvatarCircle({ className, children }: AvatarCircleProps) {
	return (
		<div className={classNames(styles.AvatarCircle, {}, [className])}>
			{children}
			<div className={styles.status}>
				<OnlineIndicator />
				{/* <DontDistIndicator /> */}
				{/* <InvisibleIndicator /> */}
			</div>
		</div>
	);
}