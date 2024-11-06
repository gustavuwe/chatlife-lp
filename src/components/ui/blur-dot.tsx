import { twMerge } from "tailwind-merge";

interface BlurDotProps {
  className?: string;
}

export const BlurDot = ({ className }: BlurDotProps) => {
  return (
    <div
      className={twMerge(
        "w-[1000px] h-[1000px] bg-dot-blur absolute -z-50",
        className
      )}
    ></div>
  );
};
