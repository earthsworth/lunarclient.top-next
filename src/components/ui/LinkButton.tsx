import clsx from "clsx";
import { ComponentProps } from "react";

type LinkButtonProps = ComponentProps<"a">;

export function LinkButton({ className, ...props }: LinkButtonProps) {
  return (
    <a
      className={clsx(
        className,
        "hover:text-sky-300 text-sky-500 underline block w-fit"
      )}
      {...props}
      target="_blank"
    >
      {props.children}
    </a>
  );
}
