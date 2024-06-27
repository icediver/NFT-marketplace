import { ICategory } from '@/types/categories.interface';
import Image from 'next/image';
import Link from 'next/link';

interface ICategoryCard {
	category: ICategory;
}

export function CategoryCard({ category }: ICategoryCard) {
	return (
		<Link
			href={category.link}
			className="h-[209px] w-[142px] overflow-hidden rounded-[20px] bg-background-secondary 2xl:h-[316px] 2xl:w-[240px]"
		>
			<div className="relative h-[142px] w-[142px] overflow-hidden text-white 2xl:h-[240px] 2xl:w-[240px]">
				<Image
					src={category.image}
					alt={category.title}
					width={240}
					height={240}
					className="blur-sm"
				/>
				<category.Icon className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.8] 2xl:scale-100" />
			</div>
			<div>
				<p className="ml-5 mt-5 font-semibold 2xl:ml-[30px] 2xl:text-1.25xl">
					{category.title}
				</p>
			</div>
		</Link>
	);
}
