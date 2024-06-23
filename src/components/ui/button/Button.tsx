import clsx from "clsx";
import {
  ButtonHTMLAttributes,
  ComponentType,
  HTMLAttributes,
  HTMLProps,
} from "react";

import Rocket from "@/assets/icons/RocketLaunch.svg";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  // className?: string;
  Icon?: ComponentType;
  variant?: "filled" | "outlined" | "white";
}

export function Button({
  className,
  title,
  Icon = Rocket,
  variant = "filled",
}: IButton) {
  return (
    <button
      className={clsx(
        "flex items-center justify-center gap-3 py-5 rounded-[20px] w-full lg:w-[224px] h-[60px] active:translate-y-1 transition-all",
        {
          ["bg-primary"]: variant === "filled",

          ["outline-primary outline outline-1 -outline-offset-4 [&>svg]:stroke-primary"]:
            variant === "outlined",
          ["bg-white [&>svg>path]:fill-primary"]: variant === "white",
        },
        className,
      )}
    >
      {Icon && <Icon />}
      <p
        className={clsx("font-semibold", {
          ["text-black"]: variant === "white",
        })}
      >
        {title}
      </p>
    </button>
  );
}
