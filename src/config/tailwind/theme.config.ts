import tailwindStandartColors from 'tailwindcss/colors';

export const colors = {
	...tailwindStandartColors,
	primary: 'var(--primary)',
	'main-background': 'var(--main-background)',
	'background-secondary': 'var(--background-secondary)',
	label: 'var(--label)',
};
export const theme = {
	colors,
	extend: {
		fontSize: {
			xss: '0.625rem',
			xs: '0.75rem',
			sm: '0.875rem',
			base: '1rem',
			md: '1.125rem',
			lg: '1.15rem',
			xl: '1.22rem',
			'1.25xl': '1.25rem',
			'1.5xl': '1.5rem',
			'1.75xl': '1.75rem',
			'2xl': '2rem',
			'2.25xl': '2.25rem',
			'2.5xl': '2.5rem',
			'3xl': '2.155rem',
			'3.5xl': '2.375rem',
			'4xl': '2.5rem',
			'5xl': '3.75rem',
			'6xl': '4.3rem',
			'7xl': '5.17rem',
			'8xl': '6.9rem',
			'9xl': '9.2rem',
		},
		fontFamily: {
			roboto: 'var(--font-roboto)',
			rubik: 'var(--font-rubik)',
		},
		keyframes: {
			animationOpacity: {
				from: { opacity: '0.2' },
				to: { opacity: '1' },
			},
			scaleIn: {
				'0%': {
					opacity: '0',
					transform: 'scale(0.9)',
				},
				'50%': {
					opacity: '0.1',
				},
				'100%': {
					opacity: '1',
					transform: 'scale(1)',
				},
			},
			width: {
				from: {
					width: '0',
				},
				to: {
					width: '100%',
				},
			},
		},
		container: {
			center: true,
			padding: {
				default: '2rem',
				xl: '0',
			},
		},

		lineHeight: {
			base: '1.1',
		},

		animation: {
			opacity: 'animationOpacity 0.7s ease-in-out',
			scaleIn: 'scaleIn .5s ',
			width: 'width 1s ease-in-out',
		},
		gridTemplateColumns: {
			// Простая сетка из 16 столбцов
			16: 'repeat(16, minmax(0, 1fr))',
			18: 'repeat(18, minmax(0, 1fr))',
			19: 'repeat(19, minmax(0, 1fr))',
			26: 'repeat(26, minmax(0, 1fr))',
		},
		backgroundImage: {
			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			'gradient-conic':
				'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
		},
		aspectRatio: {
			'4/3': '16 / 11',
		},
	},
};
