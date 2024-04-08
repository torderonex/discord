import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18nForTests';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';

export default function appRender(component : ReactNode){
	return render(
		<MemoryRouter>
			<I18nextProvider i18n={i18n}>
				{component}
			</I18nextProvider>
		</MemoryRouter>
	);
}