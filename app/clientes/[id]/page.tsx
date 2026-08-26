"use client"

import { useState } from "react"

interface Cliente {
    id: number;
    nome: string;
    idade: number;
    cpf: string;
    renda: number;
    estado: string;
}

export default function BuscarCliente(){

    const [id, setId] = useState("");
    const [cliente, setCliente] = useState<Cliente | null>(null);
    const [erro, setErro] = useState("");

    async function buscarCliente() {
        try {
            setErro("");
            setCliente(null);

            const response = await fetch(`http://localhost:3000/cliente/${id}`);
            if(!response.ok){
                throw new Error("Cliente não encontrado!");
            }
            
            const data: Cliente = await response.json();
            setCliente(data);

        } catch (error) {
            if(error instanceof Error){
                setErro(error.message);
            } else {
                setErro("Erro desconhecido!");
            }
        }
    }

    return(
        <div>
            <h1>Buscar Cliente</h1>

            <input
                type="number"
                placeholder="Digite o ID."
                value={id}
                onChange={(e)=> setId(e.target.value)}
            />

            <button onClick={buscarCliente}>
                Buscar
            </button>

            {erro && (
                <p>{erro}</p>
            )}

            {cliente && (
                <div>
                    <h2>Cliente encontrado</h2>

                    <p>
                        <strong>ID:</strong> {cliente.id}
                    </p>

                    <p>
                        <strong>Nome:</strong> {cliente.nome}
                    </p>

                    <p>
                        <strong>Idade:</strong> {cliente.idade}
                    </p>

                    <p>
                        <strong>CPF:</strong> {cliente.cpf}
                    </p>

                    <p>
                        <strong>Renda:</strong>{" "}
                        {cliente.renda.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                        })}
                    </p>

                    <p>
                        <strong>Estado:</strong> {cliente.estado}
                    </p>
                </div>
            )}
        </div>
    )
}