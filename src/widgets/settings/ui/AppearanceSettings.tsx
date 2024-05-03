import { classNames } from 'shared/lib/classNames/classNames';
import styles from './AppearanceSettings.module.scss';
import { ThemeSwitcher } from 'widgets/theme-switcher';
import React from 'react';

interface AppearanceSettingsProps{
  className? : string,
}

export default function AppearanceSettings({ className } : AppearanceSettingsProps) {
	return (
		<div className={classNames(styles.AppearanceSettings,{},[className])}>
			<ThemeSwitcher/>
		</div>
	);
}