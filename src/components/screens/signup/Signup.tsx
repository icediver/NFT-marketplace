import { Button } from '@/components/ui/button/Button';
import Image from 'next/image';

export function Signup() {
	return (
		<section className="pt-0">
			<div className="grid w-[375px] lg:w-[834px] lg:grid-cols-2 2xl:w-[1280px] 2xl:justify-items-start 2xl:gap-[60px]">
				<div className="h-[232px] w-[375px] overflow-hidden lg:h-[615px] lg:w-[397px] 2xl:h-[691px] 2xl:w-[610px]">
					<Image
						src="/images/signup/signup.png"
						alt="signup"
						width={610}
						height={691}
						className="relative -top-28 lg:top-0 lg:h-[615px] lg:w-[397px] lg:object-cover 2xl:h-[691px] 2xl:w-[610px]"
					/>
				</div>
				<form className="mx-auto flex w-[315px] flex-col lg:mx-0 lg:mr-[72px] lg:w-[325px]">
					<header className="py-[30px] lg:mt-[30px] 2xl:mt-[70px] 2xl:w-[460px]">
						<p className="text-3.5xl font-semibold 2xl:text-[51px]">
							Create Account
						</p>
						<p className="2xl:text-1.25xl">
							Welcome! enter your details and start creating, collecting and
							selling NFTs.
						</p>
					</header>
					<input type="text" placeholder="Username" className="signup-input" />
					<input
						type="text"
						placeholder="Email Address"
						className="signup-input"
					/>
					<input
						type="password"
						placeholder="Password"
						className="signup-input"
					/>
					<input
						type="password"
						placeholder="Confirm Password"
						className="signup-input"
					/>
					<Button
						className="mt-[15px] !h-[46px] w-full lg:w-[325px]"
						title="Create account"
					/>
				</form>
			</div>
		</section>
	);
}
