
export function EmptyState({title,message}:{title:string; message:string}){
    return (
        <div className="rounded-2xl border border-dashed border-green-200 bg-green-50/50 p-8 text-center">
            <h3 className="text-base font-semibold text-slate-950">
                {title}
            </h3>
            <p className="mt-1 text-sm text-slate-600 ">
                {message}
            </p>
        </div>
    );
}