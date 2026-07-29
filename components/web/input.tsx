import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface InputRootProps extends ComponentProps<"div"> {
  icon?: React.ElementType;
}

export function InputRoot({ icon: Icon, className, ...props }: InputRootProps) {
  return (
    <div
      className={cn(
        `max-w-4xl border mx-auto rounded-xl outline-0 focus-within:outline focus-within:outline-secondary transition-all duration-300 flex gap-2 items-center px-2 group`,
        className,
      )}
      {...props}
    >
      {Icon && (
        <span className="text-foreground group-focus-within:text-secondary transition-all duration-300">
          <Icon />
        </span>
      )}
      <input placeholder="Pesquise" className="w-full py-1.5 outline-none" />
    </div>
  );
}
