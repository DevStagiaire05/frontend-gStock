import type { SelectHTMLAttributes } from "react";
import clsx from "clsx";

    export function Select({className,children, ...props}: SelectHTMLAttributes<HTMLSelectElement>){

        return (
            <select
                    className={clsx(
                        'w-full rounded-xl border border-green-100 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm',
                        'focus:border-green-700 focus:outline-none focus:ring-2 focus:ring-green-100',
                        className,
                    )}
                    {...props}
            >
                {children}
            </select>
        );
    }
           
