export interface IItemPedido {
    id_produto: number;
    nome_no_momento: string;
    valor_unitario: number;
    quantidade: number;
}

export interface IPedido {
    cliente: {
        nome: string;
        telefone: number;
        endereco: string;
        ponto_referencia?: string;
    };
    pedido: {
        forma_pagamento: 'Dinheiro' | 'Pix' | 'Cartão';
        taxa_entrega: number;
        valor_total: number;
    };
    itens: IItemPedido[];
}