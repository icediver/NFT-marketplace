import clsx from "clsx";
import { Space_Mono, Work_Sans } from "next/font/google";

interface IStatistics {
  total: number;
  auctions: number;
  artists: number;
}
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: "400",
});

export function Statistics({ total, auctions, artists }: IStatistics) {
  return (
    <div className="flex w-full justify-between 2xl:[&>div>p:nth-child(1)]:text-1.75xl 2xl:[&>div>p:nth-child(2)]:text-1.5xl 2xl:[&>div]:w-[150px]">
      <div>
        <p className={clsx("text-1.25xl font-bold", spaceMono.className)}>
          {total}k+
        </p>
        <p className={clsx("font-normal 2xl:text-1.5xl")}>Total Sale</p>
      </div>

      <div>
        <p
          className={clsx(
            "text-1.25xl 2xl:text-1.75xl font-bold",
            spaceMono.className,
          )}
        >
          {auctions}k+
        </p>
        <p className={clsx("font-normal")}>Auctions</p>
      </div>

      <div>
        <p
          className={clsx(
            "text-1.25xl 2xl:text-1.75xl font-bold",
            spaceMono.className,
          )}
        >
          {artists}k+
        </p>
        <p className={clsx("font-normal")}>Artists</p>
      </div>
    </div>
  );
}
