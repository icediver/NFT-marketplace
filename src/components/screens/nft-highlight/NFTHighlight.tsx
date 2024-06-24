import { ArtistCard } from '@/components/ui/cards/artist-card/ArtistCard';
import { Button } from '@/components/ui/button/Button';
import Eye from '@/assets/icons/Eye.svg';
import dynamic from 'next/dynamic';

const Timer = dynamic(
	() => import('@/components/ui/auction-timer/AuctionTimer'),
	{ ssr: false }
);

interface INFTHighlight {
	timeExpires: string;
}

export function NFTHighlight({ timeExpires }: INFTHighlight) {
	return (
		<section className="py-0">
			<div className="mx-auto overflow-hidden lg:h-[630px] lg:w-[834px] 2xl:h-[640px] 2xl:w-[1440px]">
				<div className="mx-auto flex h-[510px] w-[375px] items-end justify-end bg-[url('/images/highlight/highlight-mobile.png')] py-[60px] lg:h-[630px] lg:w-[834px] lg:bg-[url('/images/highlight/highlight-tablet.png')] 2xl:h-[640px] 2xl:w-[1440px] 2xl:bg-[url('/images/highlight/highlight-desktop.png')]">
					<div className="mx-auto grid w-[315px] rounded-[20px] lg:w-[670px] lg:grid-cols-2 lg:grid-rows-2 2xl:w-[1050px]">
						<div className="lg:col-start-1 lg:row-start-2">
							<ArtistCard
								artist={{
									name: 'Shroomie',
									avatarPath: '/images/avatars/avatar-09.png',
								}}
								variant="small"
							/>
							<p className="section-title py-[30px]">Magic Mashrooms</p>
						</div>
						<Button
							variant="white"
							title="See NFT"
							Icon={Eye}
							className="order-last lg:col-start-1 lg:row-start-3 lg:self-end"
						/>
						<div className="lf:justify-self-end row-span-2 mb-[30px] lg:col-start-2 lg:row-start-2 lg:mb-0 lg:place-self-end">
							<Timer timeExpires={timeExpires} />
						</div>
					</div>
				</div>
				{/*
        <Image
          src="/images/highlight.png"
          alt="highlight"
          width={1440}
          height={640}
          // className="lg:bg-[80%]"
          // sizes="(max-width:1440px) 100vw, 1440px, (max-width:834px) 75vw, 834px"
          sizes="(max-width:834px) 50%"
          style={{ width: "auto", height: "100%", objectFit: "cover" }}
        />
*/}
			</div>
		</section>
	);
}
