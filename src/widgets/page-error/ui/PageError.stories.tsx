import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import PageError from './PageError';

const meta = {
	title: 'widgets/PageError',
	component: PageError,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],

} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
	},
};
