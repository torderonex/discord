import { classNames } from 'shared/lib/classNames/classNames';
import styles from './LoginForm.module.scss';
import { Button, ButtonTheme, Input } from 'shared/ui';
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
					<Input label='password' type={'password'} required={true}/>
					<Button theme={ButtonTheme.BACKGROUND}>Log in</Button>
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