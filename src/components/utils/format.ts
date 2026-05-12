export function formatCurrency(value: number){
    return new Intl.NumberFormat('fr-FR',{
        style: 'currency',
        currency: 'MGA',
        maximumFractionDigits: 2,
    }).format(value);
}

export function formatDate(value: string){
    return new Intl.DateTimeFormat('fr-FR',{
        dateStyle:'medium',
        timeStyle:'short',

    }).format(new Date(value));
}