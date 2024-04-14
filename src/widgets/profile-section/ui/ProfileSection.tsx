import styles from './ProfileSection.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import qrcode from 'shared/assets/img/IMAGE.png';
import Micro from 'shared/assets/icons/micro.svg';
import Headphones from 'shared/assets/icons/headphones.svg';
import Settings from 'shared/assets/icons/settings.svg';

interface ProfileSectionProps {
    className?: string,
}

export default function ProfileSection({ className }: ProfileSectionProps) {
	return (
		<div className={classNames(styles.ProfileSection, {}, [className])}>
			<div className={styles.left}>
				<div className={styles.avatar}>
					<img src={qrcode} alt="" />
				</div>
				<div className={styles.nickCont}>
					<p>{'бебтцан'}</p>
					<span>{'Online'}</span>
				</div>
			</div>
			<div className={styles.right}>
				<div className={styles.iconBg}>
					<Micro fill='white'/>
				</div>
				<div className={styles.iconBg}>
					<Headphones />
				</div>
				<div className={styles.iconBg}>
					<Settings />
				</div>
			</div>
		</div>
	);
}