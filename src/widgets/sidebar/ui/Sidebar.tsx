import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Sidebar.module.scss';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

interface SidebarProps{
  className? : string,
  content : SidebarContent[],
  setActive : React.Dispatch<React.SetStateAction<SidebarContent>>
  active : SidebarContent
}

export interface SidebarContent{
    name : string,
    element : ReactNode,
}


export default function Sidebar({ className,content, setActive, active } : SidebarProps) {
	const { t } = useTranslation();
	return (
		<div className={classNames(styles.Sidebar,{},[className])}>
			<header>{t('UserSettings')}</header>
			<div>
				{
					content.map(
						(e) => (
							<div 
								className={classNames(styles.tab,{ [styles.active] : active.name  === e.name },[])} 
								key={e.name}
								onClick={() => {setActive(e);}}
							>
								{e.name}
							</div>
						)
					)
				}
			</div>
		</div>
	);
}