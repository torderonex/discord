import { StoryFn } from '@storybook/react';

export const AppClassDecorator = (Story : StoryFn) => {
	return (
		<div className='app' style={{ minWidth:'600px' }}>
			<Story/>
		</div>
	);
};