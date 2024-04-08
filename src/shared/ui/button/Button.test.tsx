import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button, { ButtonTheme } from './Button';

describe('button', () => {

	test('render test', () => {
		render(<Button>TEST</Button>);
		expect(screen.getByText('TEST')).toBeInTheDocument();
	});

	test('clear theme test', () => {
		render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
		expect(screen.getByText('TEST')).toHaveClass(ButtonTheme.CLEAR);
	});
});