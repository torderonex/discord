import { ServersNavbar } from 'widgets/servers-navbar';
import styles from './MainPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ChannelsNavbar } from 'widgets/channels-navbar';
import { ProfileSection } from 'widgets/profile-section';

interface MainPageProps {
	className?: string,
}

export default function MainPage({ className }: MainPageProps) {
	return (
		<div className={classNames(styles.MainPage, {}, [className])}>
			<ServersNavbar />
			<ChannelsNavbar />
			<ProfileSection />
		</div>
	);
}