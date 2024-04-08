import type { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonSize, ButtonTheme } from './Button';
const meta = {
	title: 'shared/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],

} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
	args: {
		theme : ButtonTheme.CLEAR,
		children : 'text'
	},
};

export const Outlined: Story = {
	args: {
		theme : ButtonTheme.OUTLINED,
		children : 'text'
	},
};

export const Background: Story = {
	args: {
		theme : ButtonTheme.BACKGROUND,
		children : 'text'
	},
};

export const BackgroundInverted: Story = {
	args: {
		theme : ButtonTheme.BACKGROUND_INVERTERD,
		children : 'text'
	},
};

export const Squared: Story = {
	args: {
		theme : ButtonTheme.BACKGROUND_INVERTERD,
		size : ButtonSize.SIZE_M,
		children : '>',
		square: true
	},
};

export const SizeL: Story = {
	args: {
		theme : ButtonTheme.BACKGROUND_INVERTERD,
		children : 'text',
		size : ButtonSize.SIZE_L
	},
};

export const SizeXL: Story = {
	args: {
		theme : ButtonTheme.BACKGROUND_INVERTERD,
		children : 'text',
		size : ButtonSize.SIZE_XL
	},
};
  