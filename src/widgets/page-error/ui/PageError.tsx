import { useTranslation } from 'react-i18next';
import styles from './PageError.module.scss';
import { Button } from 'shared/ui';

export default function PageError() {
	const { t } = useTranslation();
	
	const reload = () =>{
		location.reload();
	};
    
	return (
		<div className={styles.PageError}>
			<h1>{t('Error')}</h1>
			<Button  onClick={reload}>{t('Reload')}</Button>
		</div>
	);
}