import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Modal.module.scss';
import { PropsWithChildren, useCallback, useEffect } from 'react';
import { useState, useRef } from 'react';
import Portal from 'shared/lib/portal/Portal';

//in ms
const ANIMATION_DELAY = 300;

interface ModalProps extends PropsWithChildren{
  className? : string,
  isOpen : boolean,
  onClose? : () => void;
}

export default function Modal({ className, children, isOpen, onClose } : ModalProps) {
	const [isClosing, setIsClosing] = useState<boolean>(false);
	const timerRef = useRef<ReturnType<typeof setTimeout>>();

	const closeHandler = useCallback(function (){
		if(onClose){
			setIsClosing(true);
			timerRef.current = setTimeout(() => {
				onClose();
				setIsClosing(false);
			}, ANIMATION_DELAY);
		}
	},[onClose]);

	const onKeyDown = useCallback(function (e :KeyboardEvent){
		if(e.key === 'Escape'){
			closeHandler();
		}
	},[closeHandler]);

	function contentHandleClick(e : React.MouseEvent){
		e.stopPropagation();
	}

	useEffect(() => {
		if(isOpen){
			window.addEventListener('keydown',onKeyDown);
		}

		return () => {
			clearTimeout(timerRef.current);
			window.removeEventListener('keydown', onKeyDown);
		};
	},[isOpen, onKeyDown]);

	const mods = {
		[styles.opened] : isOpen,
		[styles.closing] : isClosing,
	};

	return (
		<Portal>
			<div className={classNames(styles.Modal, mods ,[className])}>
				<div className={styles.overlay} onClick={closeHandler}>
					<div className={styles.content} onClick={contentHandleClick}>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	);
}