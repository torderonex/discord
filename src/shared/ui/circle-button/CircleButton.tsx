import styles from './CircleButton.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useRef } from 'react';
import Tooltip from '../tooltip/Tooltip';

interface CircleButtonProps extends React.PropsWithChildren{
    className?: string,
    handleClick: () => void,
    isActive: boolean,
	tooltipTitle: string
}

export default function CircleButton(props: CircleButtonProps) {
	const {
		className,
		handleClick,
		isActive,
		children,
		tooltipTitle
	} = props;
	const hoverObject = useRef<HTMLDivElement>(null);
    
	return (
		<div className={classNames(styles.CircleButton, { [styles.active] : isActive }, [className])}>
			<div className={styles.serverIcon}
				onClick={handleClick}
				ref={hoverObject}
			>
				{children}
			</div>
			<div className={styles.seenIndex}></div>
			<Tooltip
				hoverObject={hoverObject}
				title={tooltipTitle}
				right={true}
			/>
		</div>
	);
}