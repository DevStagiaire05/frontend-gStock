import type { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

    type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
        children: ReactNode;
        variant?: 'primary' | 'secondary' | 'danger';

    };

    export function Button({children,className, variant='primary', ...props}: ButtonProps){
        return (
            <button
                className={clsx(
                    'inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition shadow-sm',
                    'focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2',
                    variant === 'primary' && 'bg-green-800 text-white hover:bg-green-900',
                    variant === 'secondary' && 'bg-white text-green-900 ring-1 ring-green-200 hover:bg-green-50',
                    variant === 'danger' && 'bg-red-600 text-white hover:bg-red-700',
                    className,
                )}
                {...props}
            >
                {children}
            </button>);
    }