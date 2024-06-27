import {
	ILinkButton,
	LinkButton,
} from '@/components/ui/link-button/LinkButton';
import Image from 'next/image';

const wallets: ILinkButton[] = [
	{
		link: '#',
		title: 'Metamask',
		logo: '/images/wallet/Metamask.png',
	},
	{
		link: '#',
		title: 'Wallet Connect',
		logo: '/images/wallet/WalletConnect.png',
	},
	{
		link: '#',
		title: 'Coinbase',
		logo: '/images/wallet/Coinbase.png',
	},
];

export function ConnectWallet() {
	return (
		<section className="grid pt-0 lg:grid-cols-2 lg:gap-10 2xl:gap-[60px]">
			<Image
				src="/images/wallet/wallet-01.png"
				width={610}
				height={642}
				alt="wallet"
				className="h-[232px] w-[375px] object-cover lg:h-[530px] lg:w-[397px] 2xl:h-[642px] 2xl:w-[610px]"
			/>
			<div className="mx-auto w-[315px] lg:mx-[397px] lg:ml-0 2xl:w-[460px]">
				<header className="my-[30px] lg:my-[40px]">
					<h1 className="mb-5 text-center text-2xl font-semibold 2xl:text-[51px]">
						Connect Wallet
					</h1>
					<p className="text-1.5xl">
						Chose a wallet you want to connect. There are several wallet
						providers.
					</p>
				</header>
				<div>
					{wallets.map((wallet) => (
						<LinkButton
							key={wallet.title}
							link={wallet.link}
							title={wallet.title}
							logo={wallet.logo}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
