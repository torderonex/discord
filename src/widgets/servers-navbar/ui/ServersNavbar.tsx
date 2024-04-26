import { CircleButton, Separator, ServerSection } from 'shared/ui';
import styles from './ServersNavbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useCallback, useState } from 'react';
import DsLogo from 'shared/assets/img/discord-icon-gray.svg';
import Plus from 'shared/assets/img/plus.svg';
import { useTranslation } from 'react-i18next';

interface ServersNavbarProps {
    className?: string,
}

const testServers = [0, 1, 2, 3, 4, 5];

export default function ServersNavbar({ className }: ServersNavbarProps) {
	const { t } = useTranslation();
	const [activeServer, setActiveServer] = useState<number>(null);
	const [isDMActive, setIsDMActive] = useState<boolean>(true);
	const [addServerClicked, setAddServerClicked] = useState<boolean>(false);

	const handleDMClick = useCallback(() => {
		setIsDMActive(true);
		setActiveServer(null);
		setAddServerClicked(false);
	}, []);

	const handleServerClick = useCallback((serverId: number) => {
		setIsDMActive(false);
		setActiveServer(serverId);
		setAddServerClicked(false);
	}, []);

	const handleAddServerClick = useCallback(() => {
		setIsDMActive(false);
		setActiveServer(null);
		setAddServerClicked(true);
	}, []);

	return (
		<div className={classNames(styles.ServersNavbar, {}, [className])}>
			<CircleButton
				handleClick={handleDMClick}
				isActive={isDMActive}
				tooltipTitle={t('DirectMessages')}
			>
				<DsLogo />
			</CircleButton>
			<Separator />
			{testServers.map(serverId => 
				<ServerSection 
					key={serverId}
					serverId={serverId}
					isActive={serverId === activeServer}
					handleServerClick={handleServerClick}
				/>
			)}
			<Separator />
			<CircleButton
				handleClick={handleAddServerClick}
				isActive={addServerClicked}
				tooltipTitle={t('AddAServer')}
			>
				<Plus />
			</CircleButton>
		</div>
	);
}