import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui';
import { ButtonSize } from 'shared/ui/button/Button';

interface LangSwitcherProps{
  className? : string,
  collapsed : boolean
}

export enum Languages{
    RU = 'ru',
    EN = 'en',
}

export default function LangSwitcher({ className,collapsed } : LangSwitcherProps) {
	const { t, i18n } = useTranslation();

	function langHandle(){
		i18n.changeLanguage(i18n.language === Languages.EN ? Languages.RU : Languages.EN);
	}

	return (
		<Button 
			className={classNames('',{},[className])}
			size={ButtonSize.SIZE_L}
			onClick={langHandle}>
			{!collapsed ? t('Language') : t('Language').substring(0,2) }
		</Button>
	);
}