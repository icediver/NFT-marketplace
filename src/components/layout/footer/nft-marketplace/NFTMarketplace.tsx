import clsx from "clsx";
import { Space_Mono } from "next/font/google";
import Discord from "@/assets/icons/DiscordLogo.svg";
import YouTube from "@/assets/icons/YouTubeLogo.svg";
import Twitter from "@/assets/icons/TwitterLogo.svg";
import Instagram from "@/assets/icons/InstagramLogo.svg";
import { Logo } from "@/components/ui/logo/Logo";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export function NFTMarketplace() {
  return (
    <div className="2xl:col-span-2">
      <Logo />
      <p className="my-5 text-[#858584]">
        NFT marketplace UI created with Anima for Figma
      </p>
      <p className="mb-[15px] text-[#858584]">Join our community</p>
      <div className="grid grid-cols-4 w-[158px] mt-5 [&>button>svg>path]:fill-[#858584]">
        <button className="">
          <Discord />
        </button>
        <button>
          <YouTube />
        </button>
        <button>
          <Twitter className="[&>path]:!fill-none [&>path]:!stroke-[#858584]" />
        </button>
        <button>
          <Instagram />
        </button>
      </div>
    </div>
  );
}
