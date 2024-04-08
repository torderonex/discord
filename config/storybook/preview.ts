import type { Preview,  } from '@storybook/react';
import '../../src/app/styles/index.scss';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';
import { AppClassDecorator } from 'shared/config/storybook/AppClassDecorator';
const preview: Preview = {
	decorators : [RouterDecorator, AppClassDecorator],
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		themes: {
			default: 'normal',
			list: [
				{ name: 'normal', class: 'normal', color: '#00aced' },
				{ name: 'dark', class: 'dark', color: '#3b5998' }
			],
		},
	},
};


export default preview;
