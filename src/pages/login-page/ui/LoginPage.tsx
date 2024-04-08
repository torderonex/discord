import { classNames } from 'shared/lib/classNames/classNames';
import styles from './LoginPage.module.scss';
import LoginForm from 'widgets/login-form/ui/LoginForm';

interface LoginPageProps{
  className? : string,
}

export default function LoginPage({ className } : LoginPageProps) {
	return (
		<div className={classNames(styles.LoginPage,{},[className])}>
			<LoginForm/>
		</div>
	);
}