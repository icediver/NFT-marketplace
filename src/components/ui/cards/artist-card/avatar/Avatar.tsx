import clsx from "clsx";
import Image from "next/image";

interface IAvatar extends React.HTMLAttributes<HTMLDivElement> {
  avatarPath?: string;
  variant?: "small" | "large" | "medium" | "default";
}

export function Avatar({
  avatarPath = "",
  variant = "small",
  className,
}: IAvatar) {
  const size =
    variant === "small" || variant === "medium"
      ? 24
      : variant === "large"
        ? 60
        : 120;
  return (
    <div
      className={clsx(
        "",
        {
          ["w-[60px] h-[60px] 2xl:w-[120px] 2xl:h-[120px]"]:
            variant === "default",
        },
        className,
      )}
    >
      <Image
        src={avatarPath}
        alt="avatar"
        width={size}
        height={size}
        className="inline-block"
      />
    </div>
  );
}
