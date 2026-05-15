import type { ComponentPropsWithoutRef, ReactNode } from "react";

    type BadgeVariant =
| "default"
| "success"
| "warning"
| "danger"
| "info"
| "neutral"
| "outline";

    type BadgeSize = "sm" | "md";
    type BadgeProps = ComponentPropsWithoutRef<"span"> & {
        variant?: BadgeVariant;
        size?: BadgeSize;
        icon?: ReactNode;
    }

    const variantClasses: Record<BadgeVariant, string> = {
        default: "bg-slate-900 text-white ring-slate-900/10",
        success: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
        warning: "bg-amber-50 text-amber-700 ring-amber-600/20",
        danger: "bg-red-50 text-red-700 ring-red-600/20",
        info: "bg-blue-50 text-blue-700 ring-blue-600/20",
        neutral: "bg-slate-100 text-slate-700 ring-slate-600/10",
        outline: "bg-white text-slate-700 ring-slate-300",
        };
    
    const sizeClasses: Record <BadgeSize, string> = {
        sm: "px-2 py-0.5 text-xs",
        md: "px-2.5 py-1 text-sm"
    };

    export function Badge ({children, variant="neutral",size="sm", icon, className="", ...props}: BadgeProps){

        return (
            <span className={["inline-flex w-fit items-center gap-1 rounded-full font-medium ring-1 ring-inset",
                            "whitespace-nowrap",
                            variantClasses[variant],
                            sizeClasses[size],
                            className,
            ].join(" ")}
                    {...props}
            >
                {icon && <span className="flex items-center">{icon}</span>}
                {children}
            </span>
        );

    }
    