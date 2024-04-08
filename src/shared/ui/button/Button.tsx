import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';
import { ButtonHTMLAttributes } from 'react';

export enum ButtonTheme{
    CLEAR = 'clear',
	OUTLINED = 'outlined',
	BACKGROUND = 'background',
	BACKGROUND_INVERTERD = 'backgroundInverted',
}
export enum ButtonSize{
	SIZE_M = 'sizeM',
	SIZE_L = 'sizeL',
	SIZE_XL = 'sizeXl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className? : string,
  theme? : ButtonTheme,
  square? : boolean,
  size? : ButtonSize
}

export default function Button(props : ButtonProps) {
	const {
		className,
		children,
		theme = ButtonTheme.CLEAR,
		size = ButtonSize.SIZE_L,
		square,
		...otherProps
	} = props;
	return (
		<button
			className={classNames(styles.Button,{ [styles.square] : square },[className, styles[theme], styles[size]])}
			{...otherProps}>
			{children}
		</button>
	);
}