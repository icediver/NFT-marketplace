"use client";
import { useCountdown } from "@/hooks/useCoutdown";
import clsx from "clsx";
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});
interface IAuctionTimer {
  timeExpires: string;
}

export default function AuctionTimer({ timeExpires }: IAuctionTimer) {
  const [hours, minutes, seconds] = useCountdown(timeExpires);

  return (
    <div
      className={clsx(
        "w-[315px] lg:w-[295px] h-[144px]  rounded-[20px] timer-panel p-[30px]",
        spaceMono.className,
      )}
    >
      <div>
        <p className="text-xs">Auction ends in:</p>
        <div className="grid grid-cols-3 text-3xl">
          <p>{hours}:</p>
          <p>{minutes}:</p>
          <p>{seconds}</p>
          <p className="text-xs">Hours</p>
          <p className="text-xs">Minutes</p>
          <p className="text-xs">Seconds</p>
        </div>
      </div>
    </div>
  );
}
