import { CategoryCard } from '@/components/ui/cards/category-card/CategoryCard';
import { ICategory } from '@/types/categories.interface';

interface IBrowseCategories {
	categories: ICategory[];
}

export function BrowseCategories({ categories }: IBrowseCategories) {
	return (
		<section className="">
			<div className="adaptive-container grid grid-cols-2 gap-[30px] lg:grid-cols-4">
				<header className="section-title col-span-2 mb-10 lg:col-span-4 2xl:mb-[60px]">
					Browse categories
				</header>
				{categories.map((category) => (
					<CategoryCard key={category.title} category={category} />
				))}
			</div>
		</section>
	);
}
