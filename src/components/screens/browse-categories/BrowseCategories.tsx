import { CategoryCard } from "@/components/ui/category-card/CategoryCard";
import { ICategory } from "@/types/categories.interface";

interface IBrowseCategories {
  categories: ICategory[];
}

export function BrowseCategories({ categories }: IBrowseCategories) {
  return (
    <section className="section">
      <div className="adaptive-container grid grid-cols-2 lg:grid-cols-4 gap-[30px]">
        <header className="col-span-2 lg:col-span-4 section-title 2xl:mb-[60px] mb-10">
          Browse categories
        </header>
        {categories.map((category) => (
          <CategoryCard key={category.title} category={category} />
        ))}
      </div>
    </section>
  );
}
