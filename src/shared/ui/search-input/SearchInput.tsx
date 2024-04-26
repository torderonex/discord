import styles from './SearchInput.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import Cross from 'shared/assets/icons/cross.svg';

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    className?: string,
    value: string;
    setValue: (value: string) => void;
    placeholder: string;
}

export default function SearchInput({ className, value, setValue, placeholder }: SearchInputProps) {
	return (
		<div className={classNames(styles.SearchInput, {}, [className])}>
			<input
				value={value}
				onChange={(e) => setValue(e.target.value)}
				placeholder={placeholder}
			/>
			{value ? (
				<Cross
					onClick={() => setValue('')}
				/>
			) : (
				null
			)}
		</div>
	);
}