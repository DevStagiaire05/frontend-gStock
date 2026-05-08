import type {Stock} from '../types/inventory';

    type StockTableProps = {
        stocks: Stock[]
    };

    export function StockTable({stocks}: StockTableProps){
        return(
        <table>
            <thead>
                <tr>
                    <th>Produit</th>
                    <th>SKU</th>
                    <th>Magasin</th>
                    <th>Quantité</th>
                </tr>
            </thead>
            <tbody>
                {stocks.map((stock) => (
                    <tr key={stock.id}>
                        <td>{stock.product.name}</td>
                        <td>{stock.product.sku}</td>
                        <td>{stock.store.name}</td>
                        <td>{stock.quantity}</td>
                    </tr>
                ))}
            </tbody>
        </table>);
    }