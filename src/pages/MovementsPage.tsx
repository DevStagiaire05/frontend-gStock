import { PageHeader } from "../components/ui/PageHeader";
import { formatDate } from "../components/utils/format";
import { useInventory } from "../components/hooks/useInventory";
import { EmptyState } from "../components/ui/EmptyState";

    export function MovementsPage(){
        const{movements, loading, error} = useInventory();

        return (
            <section>
                <PageHeader title="Historique des movements" description="Suivi des entrées, sorties et transferts" />
                {loading && <p className=" text-sm text-slate-500">Chargement en cours...</p>}
                {error && <p className="rounded-xl bg-red-50 text-sm text-red-700 ">{error}</p>}

                {movements.length ===0 ? (<EmptyState title="Aucune opération n'est passée" message="Les opérations de stock apparaitront ici." />) : (
                    <div className="overflow-hidden rounded-2xl border border-green-100 bg-white shadow-sm">
                        <div className=" overflow-x-auto">
                            <table className="min-w-full divide-y divide-slate-100 text-sm ">
                                <thead className="bg-green-50 text-left text-xs uppercase tracking-wide text-green-900">
                                    <tr>
                                        <th className="px-4 py-3">Date</th>
                                        <th className="px-4 py-3">Type</th>
                                        <th className="px-4 py-3">Produit</th>
                                        <th className="px-4 py-3">Source</th>
                                        <th className="px-4 py-3">Destination</th>
                                        <th className="px-4 py-3 text-right" >Quantité</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {movements.map((movement) => (
                                        <tr key={movement.id} className="hover:bg-green-50/50">
                                            <td className="px-4 py-3 text-slate-600 ">{formatDate(movement.createdAt)}</td>
                                            <td className="px-4 py-3 font-semibold text-green-900">{movement.type}</td>
                                            <td className="px-4 py-3">{movement.product?.name}</td>
                                            <td className="px-4 py-3 text-slate-600 ">{movement.fromStore?.name ||'-'}</td>
                                            <td className="px-4 py-3 text-right font-bold">{movement.quantity}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                )}
            </section>
        );
    }