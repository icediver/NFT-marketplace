import Discord from '../../../assets/icons/DiscordLogo.svg';
import YouTube from '../../../assets/icons/YouTubeLogo.svg';
import Twitter from '../../../assets/icons/TwitterLogo.svg';
import Instagram from '../../../assets/icons/InstagramLogo.svg';
import Website from '../../../assets/icons/Globe.svg';
import Link from 'next/link';
import { ReactElement } from 'react';
import clsx from 'clsx';

interface ISocialLinks {
	twitter?: string;
	discord?: string;
	instagram?: string;
	youtube?: string;
	website?: string;
}

const social: { [key: string]: { Icon: ReactElement } } = {
	twitter: { Icon: <Twitter /> },
	discord: { Icon: <Discord /> },
	youtube: { Icon: <YouTube /> },
	instagram: { Icon: <Instagram /> },
	website: { Icon: <Website /> },
};

export function SocialLinks(socialLinks: ISocialLinks) {
	return (
		<div className="grid w-[400px] grid-cols-10 gap-2">
			{Object.keys(socialLinks).map((key) => {
				if (!socialLinks[key as keyof typeof socialLinks]) {
					return null;
				}

				return (
					<Link
						href={socialLinks[key as keyof typeof socialLinks] as string}
						className={clsx({
							['[&>svg>path]:!fill-none [&>svg>path]:!stroke-[#858584]']:
								key === 'twitter',
							['[&>svg>path]:!fill-[#858584]']: key !== 'twitter',
						})}
						key={key}
					>
						{social[key as keyof typeof social].Icon}
					</Link>
				);
			})}
		</div>
	);
}
