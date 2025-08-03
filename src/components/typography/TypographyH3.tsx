import clsx from "clsx";
import { ReactNode, ComponentProps } from "react";

export type TypographyH3Props = {
  children: ReactNode;
} & ComponentProps<"h3">;

export function TypographyH3({ children, ...props }: TypographyH3Props) {
  const { className, ...propsWithoutClassName } = props;
  return (
    <h3
      className={clsx(
        className,
        "scroll-m-20 text-2xl font-semibold tracking-tight"
      )}
      {...propsWithoutClassName}
    >
      {children}
    </h3>
  );
}
