import styles from './ChannelsNavbarSection.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import FriendsIcon from 'shared/assets/icons/friends-icon.svg';
import { useTranslation } from 'react-i18next';

interface ChannelsNavbarSectionProps {
    className?: string;
    isActive: boolean;
    channelId: number;
    handleSectionClick: (channelId: number) => void;
}

export default function ChannelsNavbarSection({ className, isActive, channelId, handleSectionClick }: ChannelsNavbarSectionProps) {
	const { t } = useTranslation();
	return (
		<div
			className={classNames(styles.ChannelsNavbarSection, { [styles.active] : isActive }, [className])}
			onClick={() => handleSectionClick(channelId)}
		>
			<FriendsIcon />
			<span>{t('Friends')}</span>
		</div>
	);
}