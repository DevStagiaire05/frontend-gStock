import type {ReactNode} from 'react';

    export function StatCard({title, value, icon}: {title: string; value:string | number; icon?: ReactNode}){

        return (
            <div className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3 justify-between">
                    <p className="text-sm font-medium text-slate-500">
                        {title}
                    </p>
                    <div className="rounded-xl bg-green-50 p-2 text-green-800">
                        {icon}
                    </div>
                </div>
                <p className="mt-3 text-3xl font-bold text-slate-950 "> {value}</p>
            </div>
        )

    }