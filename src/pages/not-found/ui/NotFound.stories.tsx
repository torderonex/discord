import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import NotFoundPage from './NotFoundPage';

const meta = {
	title: 'pages/NotFound',
	component: NotFoundPage,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],

} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
	},
};
