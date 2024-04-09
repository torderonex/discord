import { classNames } from 'shared/lib/classNames/classNames';
import styles from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';

export enum AppLinkTheme{
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  BLUE = 'blue'
}

interface AppLinkProps extends LinkProps{
  className? : string,
  theme? : AppLinkTheme
}

export default function AppLink(props : AppLinkProps) {
  
	const {
		to,
		className,
		children,
		theme = AppLinkTheme.PRIMARY,
		...otherProps
	} = props;

	return (
		<Link to={to} className={classNames(styles.AppLink,{},[className,styles[theme]])} {...otherProps}>
			{children}
		</Link>
	);
}