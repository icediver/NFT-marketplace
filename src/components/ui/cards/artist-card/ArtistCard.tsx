import { IArtist } from "@/types/artist.interface";
import clsx from "clsx";
import { Avatar } from "./avatar/Avatar";
import { Space_Mono } from "next/font/google";
import { HTMLAttributes } from "react";

interface IArtistCardProps extends HTMLAttributes<HTMLDivElement> {
  artist: IArtist;
  variant?: "small" | "large" | "medium" | "default";
}

const spaceMono = Space_Mono({ subsets: ["latin"], weight: "400" });

export function ArtistCard({
  artist: { name, avatarPath, totalSales = 0, notificationCount = 0 },
  variant = "default",

  className,
}: IArtistCardProps) {
  return (
    <div
      className={clsx("relative hidden", className, {
        ["!flex items-center gap-3"]: variant === "small",
        ["w-[315px] lg:w-[330px] h-[100px] 2xl:w-60 2xl:h-60 rounded-[20px] bg-background-secondary  2xl:flex-col justify-center items-center p-5 [&:nth-child(-n+5)]:flex lg:[&:nth-child(-n+6)]:!flex 2xl:flex"]:
          variant === "default",
      })}
    >
      <Avatar
        avatarPath={avatarPath}
        variant={variant}
        className={clsx({ ["2xl:mb-5"]: variant === "default" })}
      />

      <div>
        <p
          className={clsx({
            ["font-semibold text-1.25xl pb-1.25"]: variant === "default",
          })}
        >
          {name}
        </p>
        {!!totalSales && (
          <p>
            <span className="text-[#858584]">Total Sales: </span>
            <span className={spaceMono.className}>{totalSales} ETH</span>
          </p>
        )}
        {!!notificationCount && (
          <div
            className={clsx(
              "absolute flex justify-center items-center w-[30px] h-[30px] rounded-full bg-main-background",
              { ["top-5  left-5"]: variant === "default" },
            )}
          >
            {notificationCount}
          </div>
        )}
      </div>
    </div>
  );
}
