import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Input.module.scss';
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
	className? : string,
	label? : string
}

export default function Input({ className, type, placeholder, label, required } : InputProps) {
	return (
		<label className={classNames(styles.Input,{},[className])}>
			<span>{label}
				{required && <span className={styles.required}>*</span>}
			</span>
			<input 
				type={type}
				placeholder={placeholder}
				required={required}/>
		</label>
	);
}