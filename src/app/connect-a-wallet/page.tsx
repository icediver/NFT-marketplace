import { ConnectWallet } from '@/components/screens/connect-wallet/ConnectWallet';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Connect Wallet',
	description: 'Connect Wallet',
};

export default function Page() {
	return <ConnectWallet />;
}
