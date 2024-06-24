import clsx from 'clsx';
import {
	ButtonHTMLAttributes,
	ComponentType,
	HTMLAttributes,
	HTMLProps,
} from 'react';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	title?: string;
	// className?: string;
	Icon?: ComponentType;
	variant?: 'filled' | 'outlined' | 'white';
}

export function Button({
	className,
	title,
	Icon,
	variant = 'filled',
}: IButton) {
	return (
		<button
			className={clsx(
				'flex h-[60px] w-full items-center justify-center gap-3 rounded-[20px] py-5 transition-all active:translate-y-1 lg:w-[224px]',
				{
					['bg-primary']: variant === 'filled',

					['outline outline-1 -outline-offset-4 outline-primary [&>svg]:stroke-primary']:
						variant === 'outlined',
					['bg-white [&>svg>path]:fill-primary']: variant === 'white',
				},
				className
			)}
		>
			{Icon && <Icon />}
			<p
				className={clsx('font-semibold', {
					['text-black']: variant === 'white',
				})}
			>
				{title}
			</p>
		</button>
	);
}
