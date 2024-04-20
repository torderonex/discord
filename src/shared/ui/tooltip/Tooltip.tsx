import React, { useCallback, useEffect, useState } from 'react';
import styles from './Tooltip.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface TooltipProps {
  className?: string,
  hoverObject: React.RefObject<HTMLDivElement>,
  title: string,
  right?: boolean,
  left?: boolean,
  down?: boolean
}

const Tooltip: React.FC<TooltipProps> = ({ className, hoverObject, title, right, left, down }: TooltipProps) => {
	const [isVisible, setIsVisible] = useState(false);

	const handleMouseOver = useCallback(() => {
		setIsVisible(true);
	}, []);

	const handleMouseOut = useCallback(() => {
		setIsVisible(false);
	}, []);


	useEffect(() => {
		const serverIconElement = hoverObject.current;

		if (serverIconElement) {
			serverIconElement.addEventListener('mouseover', handleMouseOver);
			serverIconElement.addEventListener('mouseout', handleMouseOut);

			return () => {
				serverIconElement.removeEventListener('mouseover', handleMouseOver);
				serverIconElement.removeEventListener('mouseout', handleMouseOut);
			};
		}
	}, [hoverObject, handleMouseOver, handleMouseOut]);

	return (
		<>
			{isVisible && (
				<div className={classNames(styles.tooltip, { [styles.right] : right }, [className])}>
					{title}
					<div className={styles.arrow}></div>
				</div>
			)}
		</>
	);
};

export default Tooltip;
