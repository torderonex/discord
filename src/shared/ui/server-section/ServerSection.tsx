import styles from './ServerSection.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import qrcode from 'shared/assets/img/IMAGE.png';
import { useRef } from 'react';
import Tooltip from '../tooltip/Tooltip';

interface ServerSectionProps {
	className?: string,
	isActive: boolean,
	handleServerClick: (serverId: number) => void,
	serverId: number
}

export default function ServerSection(props: ServerSectionProps) {
	const {
		className,
		isActive,
		handleServerClick,
		serverId
	} = props;

	const hoverObject = useRef<HTMLDivElement>(null);
	
	return (
		<div className={classNames(styles.ServerSection, { [styles.active] : isActive }, [className])}>
			<div className={styles.serverIcon}
				onClick={() => handleServerClick(serverId)}
				ref={hoverObject}
			>
				<img src={qrcode} alt="" />
			</div>
			<div className={styles.seenIndex}></div>
			<Tooltip
				hoverObject={hoverObject}
				title={'servers name'}
				right={true}
			/>
		</div>
	);
}