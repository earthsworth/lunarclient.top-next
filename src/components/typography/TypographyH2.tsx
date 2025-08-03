import clsx from "clsx";
import { ReactNode, ComponentProps } from "react";

export type TypographyH2Props = {
  children: ReactNode;
} & ComponentProps<"h2">;

export function TypographyH2({ children, ...props }: TypographyH2Props) {
  const { className, ...propsWithoutClassName } = props;
  return (
    <h2
      className={clsx(
        className,
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"
      )}
      {...propsWithoutClassName}
    >
      {children}
    </h2>
  );
}
