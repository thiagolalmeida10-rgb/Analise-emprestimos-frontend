import type { Cliente, CriarEmprestimoRequest, Emprestimo} from "@/types";
const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://analise-emprestimos-backend.onrender.com";

async function request<T>(
    endpoint: string,
    options: RequestInit = {}) : Promise<T> {
    const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers: {
            "Content-Type" : "application/json",
            ...options.headers,
        }
    })

    const data = await response.json();

    if(!response.ok){
        throw new Error(
            data?.mensagem || "Erro ao realizar requisição."
        )
    }
    
    return data;
}

export async function buscarCliente(): Promise<Cliente[]> {
    return request<Cliente[]>("/clientes")
}

export async function buscarClientePorId(id: number): Promise<Cliente> {
    return request<Cliente>(`/clientes/${id}`)
}

export async function criarCliente(cliente: Omit<Cliente, "id">): Promise<Cliente> {
    return request<Cliente>("/clientes", {
        method: "POST",
        body: JSON.stringify(cliente),
    });
}

export async function atualizarCliente(id: number, cliente: Partial<Omit<Cliente, "id">>
): Promise<Cliente> {
    return request<Cliente>(`/cliente/${id}`, {
        method: "PUT",
        body: JSON.stringify(cliente),
    })
}

export async function excluirCliente(id: number): Promise<void> {
    await request(`/cliente/${id}`, {
        method: "DELETE",
    })
}

export async function criarEmprestimo(dados: CriarEmprestimoRequest): Promise<Emprestimo> {
    return request<Emprestimo>("/emprestimos", {
        method: "POST",
        body: JSON.stringify(dados),
    });
}