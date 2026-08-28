export type TipoEmprestimo = 
| "PESSOAL"
| "GARANTIA"
| "CONSIGNADO";

export type Cliente = {
    id: number;
    nome: string;
    cpf: string;
    idade: number;
    renda: number;
    estado: string;
}

export type CriarEmprestimoRequest = {
    clientId: number;
    amount: number;
}

export type Emprestimo = {
    id: number;
    clientId: number;
    quantia: number;
    taxaDeJuro: number;
    tipo: TipoEmprestimo;
}

export type MensagemResponse = {
    mensagem: string;
}

export type ApiError = {
    mensagem: string;
}