import { Badge } from "../components/ui/Badge";
type StockStatus = "ok" | "low" | "out";
type MovementType = "IN" | "OUT" | "TRANSFER" | "ADJUSTMENT";
type UserRole = "ADMIN" | "STORE_MANAGER" | "READER";
type OrderStatus = "DRAFT" | "ORDERED" | "RECEIVED" | "CANCELLED";
type InventoryCountStatus = "OPEN" | "COUNTING" | "CLOSED" | "CANCELLED";

        export function StockStatusBadge({quantity,  minimumQuantity,}: {  quantity: number;  minimumQuantity: number;}) {

                let status: StockStatus = "ok";
                     if (quantity <= 0) {
                            status = "out";
                     } else if (quantity <= minimumQuantity) {
                             status = "low";
                        }

                const config: Record<StockStatus,{label: string; variant: "success" | "warning" | "danger";}> = {
                    ok: {
                        label: "Stock normal",
                        variant: "success",
                    },
                    low: {
                        label: "Stock faible",
                        variant: "warning",
                    },
                    out: {
                        label: "Rupture",
                        variant: "danger",
                    },
                };

      return <Badge variant={config[status].variant}>{config[status].label}</Badge>;
    }


        export function MovementTypeBadge({ type }: { type: MovementType }) {

             const config: Record<MovementType,{label: string;variant: "success" | "danger" | "info" | "warning";}> = {
                    IN: {
                        label: "Entrée",
                        variant: "success",
                    },
                    OUT: {
                        label: "Sortie",
                        variant: "danger",
                    },
                    TRANSFER: {
                        label: "Transfert",
                        variant: "info",
                    },
                    ADJUSTMENT: {
                        label: "Correction",
                        variant: "warning",
                    },
                 };

  return <Badge variant={config[type].variant}>{config[type].label}</Badge>;

        }


        export function RoleBadge({ role }: { role: UserRole }) {

            const config: Record<UserRole,{label: string; variant: "default" | "info" | "neutral";}> = {
                ADMIN: {
                    label: "Administrateur",
                    variant: "default",
                },
                STORE_MANAGER: {
                    label: "Gestionnaire magasin",
                    variant: "info",
                },
                READER: {
                    label: "Lecteur",
                    variant: "neutral",
                },
            };

         return <Badge variant={config[role].variant}>{config[role].label}</Badge>;
        }


        export function PurchaseOrderStatusBadge({status,}: {status: OrderStatus;}) {

             const config: Record<OrderStatus,{label: string; variant: "neutral" | "info" | "success" | "danger";}> = {
                    DRAFT: {
                        label: "Brouillon",
                        variant: "neutral",
                    },
                    ORDERED: {
                        label: "Commandée",
                        variant: "info",
                    },
                    RECEIVED: {
                        label: "Réceptionnée",
                        variant: "success",
                    },
                    CANCELLED: {
                        label: "Annulée",
                        variant: "danger",
                    },
                };

            return <Badge variant={config[status].variant}>{config[status].label}</Badge>;
        }


        export function InventoryCountStatusBadge({status,}: {status: InventoryCountStatus;}) {

                const config: Record<InventoryCountStatus,{label: string; variant: "neutral" | "info" | "success" | "danger";}> = {
                    OPEN: {
                        label: "Ouvert",
                        variant: "info",
                    },
                    COUNTING: {
                        label: "Comptage en cours",
                        variant: "info",
                    },
                    CLOSED: {
                        label: "Clôturé",
                        variant: "success",
                    },
                    CANCELLED: {
                        label: "Annulé",
                        variant: "danger",
                    },
                 };

         return <Badge variant={config[status].variant}>{config[status].label}</Badge>;
     }