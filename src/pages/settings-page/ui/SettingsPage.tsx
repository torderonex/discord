import { Sidebar,SidebarContent as SettingsContent } from 'widgets/sidebar';
import styles from './SettingsPage.module.scss';
import React, { useState } from 'react';
import { AppearanceSettings } from 'widgets/settings/appearance';
import { useTranslation } from 'react-i18next';
import { MyAccountSettings } from 'widgets/settings/my-account';
import { LanguageSettings } from 'widgets/settings/language';
import { Button, ButtonTheme, CircleButton } from 'shared/ui';
import { useNavigate } from 'react-router-dom';
import { BackgroundInverted } from 'shared/ui/button/Button.stories';

export default function SettingsPage() {
	const { t } = useTranslation();
    
	const defaultVal : SettingsContent = {
		name : t('MyAccount'),
		element : <MyAccountSettings/>
	};
    
	const content : SettingsContent[] = [
		defaultVal,
		{
			name : t('Appearance'),
			element : <AppearanceSettings/>
		},
		{
			name : t('LanguageSettings'),
			element : <LanguageSettings/>
		},
	]; 

	const [active, setActive] = useState<SettingsContent>(defaultVal);
	const navigator = useNavigate();    
	
	return (
		<div className={(styles.SettingsPage)}>
			<div className={styles.left}>
				<Sidebar 
					content={content}
					active={active}
					setActive={setActive}/>
			</div>
			<div className={styles.right}>
				{active.element}
				<Button
					onClick={() => navigator('/channels')}
					className={styles.exit}
					square={true}
					// eslint-disable-next-line i18next/no-literal-string
				>
                    (X)
				</Button>
			</div>
		</div>
	);
}