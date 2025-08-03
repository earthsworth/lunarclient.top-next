import clsx from "clsx";
import { ReactNode, ComponentProps } from "react";

export type TypographyH1Props = {
  children: ReactNode;
} & ComponentProps<"h1">;

export function TypographyH1({ children, ...props }: TypographyH1Props) {
  const { className, ...propsWithoutClassName } = props;
  return (
    <h1
      className={clsx(
        className,
        "scroll-m-20 text-4xl font-extrabold tracking-tight text-balance"
      )}
      {...propsWithoutClassName}
    >
      {children}
    </h1>
  );
}
