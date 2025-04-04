import * as React from "react";
import { cn } from "@/lib/utils";
import { CircleX } from "lucide-react";
import { FieldError } from "react-hook-form";
interface InputProps extends React.ComponentProps<"input"> {
  error?: FieldError;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        <input
          type={type}
          data-slot="input"
          className={cn(
            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            className,
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <ul className="flex flex-col gap-2">
            {/* erro principal (ex: .min) */}
            {error.message && (
              <span className="flex items-center gap-1.5 text-sm text-red-500">
                <CircleX size={18} /> {error.message}
              </span>
            )}

            {/* erros do superRefine (vêm no types.custom como array) */}
            {Array.isArray(error.types?.custom) &&
              error.types.custom.map((msg, index) => (
                <span
                  className="flex items-center gap-1.5 text-sm text-red-500"
                  key={index}
                >
                  <CircleX size={18} />
                  {msg}
                </span>
              ))}
          </ul>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
