const VendaStatus = {
    INICIADA: 'iniciada',
    CONCLUIDA: 'concluida',
    CANCELADA: 'cancelada'
} as const

let vendaStatus: string
vendaStatus = VendaStatus.INICIADA
console.log(VendaStatus.CANCELADA);
