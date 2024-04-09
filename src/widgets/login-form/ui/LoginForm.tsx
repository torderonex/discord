import { classNames } from 'shared/lib/classNames/classNames';
import styles from './LoginForm.module.scss';
import { AppLink, AppLinkTheme, Button, ButtonTheme, Input } from 'shared/ui';
import qrcode from 'shared/assets/img/IMAGE.png';
interface LoginFormProps{
  className? : string,
}

export default function LoginForm({ className } : LoginFormProps) {
	return (
		<div className={classNames(styles.LoginForm,{},[className])}>
			<div className={styles.left}>
				<header>
					<h1>Welcome back!</h1>
					<p>We are so excited to see you again!</p>
				</header>
				<form>
					<Input label='email or phone number' required={true}/>
					<div>
						<Input label='password' type={'password'} required={true}/>
						<AppLink theme={AppLinkTheme.BLUE} className={styles.link} to='/'>Forgot your password?</AppLink>
					</div>
					<div className={styles.log}>
						<Button theme={ButtonTheme.BACKGROUND}>Log in</Button>
						<span className={styles.need}>
						Need an account?
							<AppLink theme={AppLinkTheme.BLUE} className={styles.link} to='/'> Register</AppLink>
						</span>
					</div>
				</form>
			</div>
			<div className={styles.right}>
				<img src={qrcode}/>
				<p className={styles.h}>Log in with QR Code</p>
				<p>Scan this with the Discord mobile app to log in instantly</p>
			</div>			
		</div>
	);
}