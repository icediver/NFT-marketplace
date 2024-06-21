import { ICategory } from "@/types/categories.interface";
import Image from "next/image";
import Link from "next/link";

interface ICategoryCard {
  category: ICategory;
}

export function CategoryCard({ category }: ICategoryCard) {
  return (
    <Link
      href={category.link}
      className="w-[142px] h-[209px] 2xl:w-[240px] 2xl:h-[316px] rounded-[20px] overflow-hidden bg-background-secondary"
    >
      <div className="relative w-[142px] h-[142px] 2xl:h-[240px] 2xl:w-[240px] overflow-hidden text-white">
        <Image
          src={category.image}
          alt={category.title}
          width={240}
          height={240}
          className="blur-sm"
        />
        <category.Icon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.8] 2xl:scale-100" />
      </div>
      <footer>
        <p className="font-semibold 2xl:text-1.25xl ml-5 2xl:ml-[30px] mt-5">
          {category.title}
        </p>
      </footer>
    </Link>
  );
}
