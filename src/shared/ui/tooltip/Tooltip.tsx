import React, { useCallback, useEffect, useState } from 'react';
import styles from './Tooltip.module.scss';

interface TooltipProps {
  className?: string,
  hoverObject: React.RefObject<HTMLDivElement>,
  title: string
}

const Tooltip: React.FC<TooltipProps> = ({ hoverObject, title }: TooltipProps) => {
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
				<div className={styles.tooltip}>
					{title}
					<div className={styles.arrow}></div>
				</div>
			)}
		</>
	);
};

export default Tooltip;
