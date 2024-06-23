import { Logo } from "@/components/ui/logo/Logo";
import BurgerMenu from "@/assets/icons/BurgerMenu.svg";
import Link from "next/link";
import { explore } from "@/assets/data/explore.data";
import { Button } from "@/components/ui/button/Button";
import User from "@/assets/icons/User.svg";

export function Header() {
  return (
    <header className="section py-[15px] 2xl:py-[20px]">
      <div className="w-[315px] lg:w-[734px] 2xl:w-[1170px] mx-auto flex justify-between items-center">
        <Logo />
        <button className="2xl:hidden">
          <BurgerMenu />
        </button>
        <div className="hidden 2xl:grid 2xl:grid-cols-4 w-[607px] gap-2 items-center justify-items-center">
          {explore.map((item, index) => (
            <Link key={index} href={item.link} className="text-[15px]">
              {item.title}
            </Link>
          ))}
          <Button Icon={User} title="Sign In" className="2xl:!w-[150px]" />
        </div>
      </div>
    </header>
  );
}
