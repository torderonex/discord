import React, { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps extends PropsWithChildren{
    element? : HTMLElement
}

export default function Portal({ children, element = document.querySelector('.app') } : PortalProps) {
	
	const [domReady, setDomReady] = React.useState(false);

	React.useEffect(() => {
		setDomReady(true);
	}, []);
  
	return domReady 
		? createPortal(children, element) 
		: null;
}