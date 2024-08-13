'use client';
import { Logo } from '@/components/ui/logo/Logo';
import Link from 'next/link';
import { explore } from '@/assets/data/explore.data';
import User from '@/assets/icons/User.svg';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

export function Header() {
	const [active, setActive] = useState(false);

	useEffect(() => {
		if (active) document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = 'scroll';
		};
	}, [active]);

	return (
		<header className="py-[15px] 2xl:py-[20px]">
			<div className="mx-auto flex w-[315px] items-center justify-between lg:w-[734px] 2xl:w-[1170px]">
				<Logo />
				<button
					className={clsx(
						'relative z-20 h-5 rounded-full 2xl:hidden [&>div]:h-1 [&>div]:rounded [&>div]:bg-white/80 [&>div]:transition-all',
						{
							['after:content-"" after:absolute after:-left-1.5 after:-top-2 after:h-9 after:w-9 after:rounded-full after:border-2 after:border-white/80']:
								active,
						}
					)}
					onClick={() => setActive(!active)}
				>
					{/*
          <BurgerMenu />
*/}
					<div
						className={clsx('absolute top-0 w-4', {
							['!w-6 translate-y-2 rotate-45']: active,
						})}
					/>
					<div
						className={clsx('absolute top-1/2 w-6 -translate-y-1/2', {
							['!w-0']: active,
						})}
					/>
					<div
						className={clsx('absolute bottom-0 w-4', {
							['!w-6 -translate-y-2 -rotate-45']: active,
						})}
					/>
				</button>
				{active && (
					<nav
						className="fixed bottom-0 left-0 right-0 top-0 z-10 bg-zinc-900/90"
						style={{ overflowY: 'scroll', maxHeight: '100vh' }}
					>
						<ul className="flex h-full flex-col items-center justify-center gap-10">
							<li>
								<Logo />
							</li>
							{explore.map((item, index) => (
								<li
									className="text-2xl"
									key={item.title}
									onClick={() => setActive(false)}
								>
									<Link href={item.link}>{item.title}</Link>
								</li>
							))}

							<li onClick={() => setActive(false)}>
								<Link
									href="/signup"
									className="flex h-[60px] w-[150px] items-center justify-center gap-2 rounded-[20px] bg-primary font-semibold transition-all active:translate-y-1"
								>
									<User />
									Sign Up
								</Link>
							</li>
						</ul>
					</nav>
				)}

				<nav className="hidden w-[607px] items-center justify-items-center gap-2 2xl:grid 2xl:grid-cols-4">
					{explore.map((item, index) => (
						<Link key={index} href={item.link} className="text-[15px]">
							{item.title}
						</Link>
					))}
					<Link
						href="/signup"
						className="flex h-[60px] items-center justify-center gap-2 rounded-[20px] bg-primary font-semibold transition-all active:translate-y-1 2xl:w-[150px]"
					>
						<User />
						Sign Up
					</Link>
				</nav>
			</div>
		</header>
	);
}
