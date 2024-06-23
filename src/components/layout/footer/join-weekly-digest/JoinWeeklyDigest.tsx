import { SubscribeForm } from "@/components/ui/forms/subscribe-form/SubscribeForm";
import clsx from "clsx";
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export function JoinWeeklyDigest() {
  return (
    <div className="2xl:col-span-3">
      <header className={clsx(spaceMono.className, "text-[22px] mb-5")}>
        Join our weekly digest
      </header>
      <p className="text-[#858584] mb-5">
        Get exclusive promotions & updates straight to your inbox.
      </p>
      <div className="relative lg:w-[420px] 2xl:ml-auto">
        <SubscribeForm variant="second" />
      </div>
    </div>
  );
}
