import Image from 'next/image';
import Link from 'next/link';

export interface ILinkButton {
	link: string;
	title: string;
	logo: string;
}

export function LinkButton({ link, title, logo }: ILinkButton) {
	return (
		<Link
			href={link}
			className="mb-5 flex w-[315px] items-center gap-5 rounded-[20px] border border-primary bg-background-secondary px-10 py-[14px] transition-all hover:contrast-75 lg:w-[320px]"
		>
			<Image
				src={logo}
				alt={title}
				width={40}
				height={40}
				className="h-8 w-8"
			/>
			<p>{title}</p>
		</Link>
	);
}
