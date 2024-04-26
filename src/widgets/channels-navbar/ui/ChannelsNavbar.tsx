import { ChannelsNavbarSection, SearchInput } from 'shared/ui';
import styles from './ChannelsNavbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface ChannelsNavbarProps {
    className?: string,
}

const testM = [0, 1, 2];

export default function ChannelsNavbar({ className }: ChannelsNavbarProps) {
	const [test, setTest] = useState<string>('');
	const [activeSection, setActiveSection] = useState<number>(0);
	const { t } = useTranslation();

	const handleSectionClick = useCallback((channelId: number) => {
		setActiveSection(channelId);
	}, []);

	return (
		<div className={classNames(styles.ChannelsNavbar, {}, [className])}>
			<header>
				<SearchInput value={test} setValue={setTest} placeholder={t('FindConvo')}/>
			</header>
			<div className={styles.sections}>
				{testM.map(channelId => 
					<ChannelsNavbarSection
						key={channelId}
						channelId = {channelId}
						isActive = {activeSection == channelId}
						handleSectionClick = {handleSectionClick}
					/>
				)}
			</div>
			{test}
		</div>
	);
}