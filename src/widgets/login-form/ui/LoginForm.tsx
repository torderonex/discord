import { classNames } from 'shared/lib/classNames/classNames';
import styles from './LoginForm.module.scss';
import { AppLink, AppLinkTheme, Button, ButtonTheme, Input } from 'shared/ui';
import qrcode from 'shared/assets/img/IMAGE.png';
import { useTranslation } from 'react-i18next';

interface LoginFormProps{
  className? : string,
}

export default function LoginForm({ className } : LoginFormProps) {
	const { t } = useTranslation();
	return (
		<div className={classNames(styles.LoginForm,{},[className])}>
			<div className={styles.left}>
				<header>
					<h1>{t('WelcomeBack')}</h1>
					<p>{t('WeExcited')}</p>
				</header>
				<form>
					<Input label={t('EmailOrPhone')} required={true}/>
					<div>
						<Input label={t('Password')}  type={'password'} required={true}/>
						<AppLink theme={AppLinkTheme.BLUE} className={styles.link} to='/'>{t('ForgotPass')}</AppLink>
					</div>
					<div className={styles.log}>
						<Button theme={ButtonTheme.BACKGROUND} className={styles.btn}>{t('LogIn')}</Button>
						<span className={styles.need}>
							{t('NeedAc')}
							<AppLink theme={AppLinkTheme.BLUE} className={styles.link} to='/'> {t('Register')}</AppLink>
						</span>
					</div>
				</form>
			</div>
			<div className={styles.right}>
				<img src={qrcode}/>
				<p className={styles.h}>{t('LogQR')}</p>
				<p>{t('ScanThis')}</p>
			</div>			
		</div>
	);
}