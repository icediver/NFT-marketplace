import { explore } from "@/assets/data/explore.data";
import clsx from "clsx";
import { Space_Mono } from "next/font/google";
import Link from "next/link";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export function Explore() {
  return (
    <div>
      <header className={clsx(spaceMono.className, "text-[22px] mb-5")}>
        Explore
      </header>
      {explore.map((item, index) => (
        <Link
          key={index}
          className="block mb-5 text-[#858584]"
          href={item.link}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
}
