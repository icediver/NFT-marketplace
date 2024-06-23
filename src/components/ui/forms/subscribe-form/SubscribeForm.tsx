import clsx from "clsx";
import { Button } from "../../button/Button";
import Enveleope from "@/assets/icons/EnvelopeSimple.svg";

interface ISubscribeForm {
  variant?: "first" | "second";
}

export function SubscribeForm({ variant = "first" }: ISubscribeForm) {
  return (
    <form className="relative">
      <input
        type="text"
        placeholder="Enter Your Email Here"
        className={clsx("w-full mt-10 h-[46px] pl-5 rounded-[20px]", {
          ["2xl:h-[60px]"]: variant === "first",
          ["lg:h-[60px]"]: variant === "second",
        })}
      />
      <Button
        title="Subscribe"
        className={clsx({
          ["mt-5 !h-[46px] 2xl:!h-[60px] lg:w-[300px]  2xl:!w-[211px] 2xl:absolute 2xl:bottom-0 2xl:right-0"]:
            variant === "first",
          ["mt-5 !h-[46px] lg:!h-[60px] lg:!w-[179px] lg:absolute lg:bottom-0 lg:right-0"]:
            variant === "second",
        })}
        Icon={Enveleope}
        type="submit"
        onClick={() => {}}
      />
    </form>
  );
}
