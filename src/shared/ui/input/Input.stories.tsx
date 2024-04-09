import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';
const meta = {
	title: 'shared/Input',
	component: Input,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],

} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Placeholder: Story = {
	args: {
		placeholder : 'text'
	},
};

export const Label: Story = {
	args: {
		label : 'Password',
		type : 'password'
	},
};

export const Required: Story = {
	args: {
		label : 'Password',
		type : 'password',
		required : true
	},
};

