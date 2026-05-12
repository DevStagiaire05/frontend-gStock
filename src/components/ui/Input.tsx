import type { InputHTMLAttributes } from "react";
import clsx from "clsx";


    export function Input ({className, ...props}: InputHTMLAttributes<HTMLInputElement>){
        return (
            <input
                className={clsx(
                    'w-full rounded-xl border border-green-100 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm',
                    'placeholder:text-slate-400 focus:border-green-700 focus:outline-none focus:ring-2 focus:ring-green-100',
                    className,
                )}
                {...props}
            />
            
        );
    }
