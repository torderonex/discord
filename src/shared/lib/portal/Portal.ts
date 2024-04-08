import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps extends PropsWithChildren{
  element? : HTMLElement
}

export default function Portal({ children, } : PortalProps) {
	try{
		return createPortal(children, document.querySelector('.app'));

	}catch(e){
		console.log(e);
	}
}