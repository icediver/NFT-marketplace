import clsx from "clsx";
import { Space_Mono } from "next/font/google";
import Storefront from "@/assets/icons/Storefront.svg";
import Link from "next/link";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export function Logo() {
  return (
    <Link className={clsx(spaceMono.className, "text-[22px]")} href="/">
      <Storefront className="inline-block mr-3 [&>path]:fill-primary" />
      <span>NFT Marketplace</span>
    </Link>
  );
}
