import {NavLink, Outlet} from 'react-router-dom';
import {Boxes,LayoutDashboard,Package,Store, Repeat, ClipboardList} from 'lucide-react';

import clsx from 'clsx';

const links = [
    {to:'/',label:'Dashboard',icon:LayoutDashboard},
    {to:'/products',label:'Produits',icon:Package},
    {to:'/stores',label:'Magasins',icon:Store},
    {to:'/stocks', label:'Stocks',icon:Boxes},
    {to:'/operations',label:'Operations',icon:Repeat},
    {to:'/movements',label:'Mouvements',icon:ClipboardList},
];

    export function AppLayout() {

        return (
            <div className="min-h-screen bg-slate-50 text-slate-900">
                <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-green-100 bg-white/95 p-4 shadow-sm lg:block ">
                    <div className="rounded-2xl bg-green-900 p-4 text-white">
                        <p className="text-xs uppercase tracking-[0.2em] text-green-200">Gestion de Stock</p>
                        <h2 className="mt-2 text-lg font-bold">Multi-magasins</h2>
                    </div>
                    <nav className="mt-6 space-y-1">
                        {links.map((link) =>{
                            const Icon = link.icon;
                            return (<NavLink key={link.to} to={link.to} className={({isActive}) => clsx(
                                'flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition',
                                isActive ? 'bg-green-100 text-green-950' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950',
                            )}>
                                <Icon size={18}/>
                                {link.label}

                            </NavLink>);
                        })}
                    </nav>
                </aside>
                <header className="sticky top-0 z-20 border-b border-green-100 bg-white/90 px-4 py-3 backdrop-blur lg:hidden">
                    <p className="font-bold text-green-950 ">
                        Gestion de Stock  
                    </p>
                    <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-6">
                        {links.map((link) =>(
                            <NavLink key={link.to} to={link.to} className="rounded-lg bg-green-50 px-2 py-2 text-center text-xs font-medium text-green-900">
                                {link.label}
                            </NavLink>
                        ))}
                    </div>
                </header>
                <main className="lg:pl-64">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px:6 lg:px-8">
                        <Outlet/>
                    </div>
                </main>
            </div>
        );
    }