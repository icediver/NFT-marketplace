import { IHowItWorksCard } from "@/types/how-it-works-card.interface";
import Image from "next/image";

export function HowItWorksCard({ image, title, description }: IHowItWorksCard) {
  return (
    <div className="bg-background-secondary rounded-[20px]  p-[20px] 2xl:p-[30px] w-[315px] lg:w-[200px] 2xl:w-[330px] flex items-center lg:flex-col gap-5">
      <Image
        src={image}
        alt={title}
        width={200}
        height={200}
        className="w-[100px] h-[100px] lg:w-[160px] lg:h-[160px] 2xl:w-[200px] 2xl:h-[200px]"
      />
      <div className="text-start lg:text-center">
        <h3 className="mb-2.5 font-semibold 2xl:text-1.5xl">{title}</h3>
        <p className="text-xs 2xl:text-base">{description}</p>
      </div>
    </div>
  );
}
