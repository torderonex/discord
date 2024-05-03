import { classNames } from 'shared/lib/classNames/classNames';
import styles from './LanguageSettings.module.scss';
import { LangSwitcher } from 'widgets/lang-switcher';

interface LanguageSettingsProps{
  className? : string,
}

export default function LanguageSettings({ className } : LanguageSettingsProps) {
	return (
		<div className={classNames(styles.LanguageSettings,{},[className])}>
			<LangSwitcher collapsed={false}/>
		</div>
	);
}