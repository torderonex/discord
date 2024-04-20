import styles from './ProfileSection.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import qrcode from 'shared/assets/img/IMAGE.png';
import Micro from 'shared/assets/icons/micro.svg';
import MicroMuted from 'shared/assets/icons/micro-muted.svg';
import Headphones from 'shared/assets/icons/headphones.svg';
import HeadphonesMuted from 'shared/assets/icons/headphones-muted.svg';
import Settings from 'shared/assets/icons/settings.svg';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { Tooltip } from 'shared/ui';
import { useTranslation } from 'react-i18next';

interface ProfileSectionProps {
    className?: string,
}

export default function ProfileSection({ className }: ProfileSectionProps) {
	const [microMuted, setMicroMuted ] = useState<boolean>(false);
	const [headphonesMuted, setHeadphonesMuted ] = useState<boolean>(false);
	const microphoneRef = useRef<HTMLDivElement>(null);
	const headphonesRef = useRef<HTMLDivElement>(null);
	const settingsRef = useRef<HTMLDivElement>(null);
	
	const navigator = useNavigate();
	const { t } = useTranslation();

	const microphoneClick = () => {
		if (headphonesMuted == true) {
			setHeadphonesMuted(false);
		}
		setMicroMuted(!microMuted);
	};

	const headphonesClick = () => {
		if (microMuted == false) {
			setMicroMuted(true);
		}
		setHeadphonesMuted(!headphonesMuted);
	};

	return (
		<div className={classNames(styles.ProfileSection, {}, [className])}>
			<div className={styles.left}>
				<div className={styles.avatar}>
					<img src={qrcode} alt="" />
				</div>
				<div className={styles.nickCont}>
					<p>{'бебтцан'}</p>
					<span>{t('Online')}</span>
				</div>
			</div>
			<div className={styles.right}>
				<div className={styles.iconBg}
					onClick={microphoneClick}
					ref={microphoneRef}
				>
					{microMuted ?
						<MicroMuted /> :
						<Micro />
					}
					<Tooltip
						hoverObject={microphoneRef}
						title={microMuted ? t('TurnOnMic') : t('TurnOffMic')}
					/>
				</div>
				<div className={styles.iconBg}
					onClick={headphonesClick}
					ref={headphonesRef}
				>
					{headphonesMuted ?
						<HeadphonesMuted /> :
						<Headphones />
					}
					<Tooltip
						hoverObject={headphonesRef}
						title={headphonesMuted ? t('TurnOnHeadp') : t('TurnOffHeadp')}
					/>
				</div>
				<div className={styles.iconBg}
					onClick={() => navigator('/settings')}
					ref={settingsRef}
				>
					<Settings />
					<Tooltip
						hoverObject={settingsRef}
						title={t('Settings')}
					/>
				</div>
			</div>
		</div>
	);
}