import type { Meta, StoryObj } from '@storybook/react';

import 'app/styles/index.scss';
import AppLink, { AppLinkTheme } from './AppLink';
const meta = {
	title: 'shared/AppLink',
	component: AppLink,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args:{
		to:'/'
	}
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PRIMARY: Story = {
	args: {
		theme : AppLinkTheme.PRIMARY,
		children : 'text'
	},
};

export const SECONDARY: Story = {
	args: {
		theme : AppLinkTheme.SECONDARY,
		children : 'text'
	},
};
export const Blue: Story = {
	args: {
		theme : AppLinkTheme.BLUE,
		children : 'text'
	},
};
  