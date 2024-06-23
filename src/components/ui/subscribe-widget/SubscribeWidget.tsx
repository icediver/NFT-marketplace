import Image from "next/image";
import { SubscribeForm } from "../forms/subscribe-form/SubscribeForm";

export function SubscribeWidget() {
  return (
    <div className="grid lg:grid-cols-2 gap-[30px] lg:bg-background-secondary 2xl:p-[60px] rounded-[20px] lg:px-[30px] lg:py-[40px]">
      <div className="w-[315px] h-[255px] lg:w-[300px] lg:mt-[0px] lg:h-[280px] 2xl:w-[425px] 2xl:h-[310px] rounded-[20px] overflow-hidden">
        <Image
          src="/images/subscribe/subscribe-02.png"
          alt="subscribe"
          width={425}
          height={310}
        />
      </div>
      <div className="lg:w-[300px]  2xl:w-[425px] flex flex-col justify-between 2xl:py-5">
        <div className="mt-5 lg:mt-0">
          <h3 className="text-1.75xl font-semibold mb-[30px] lg:mb-2.5 2xl:text-2.5xl">
            Join Our Weekly Digest
          </h3>
          <p className="text-base">
            Get exclusive promotions & updates straight to your inbox.
          </p>
        </div>
        <SubscribeForm />
      </div>
    </div>
  );
}
