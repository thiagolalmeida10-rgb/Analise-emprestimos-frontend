"use client"

import { useEffect, useState } from "react";
import ClientTable from "@/components/ClienteTable";

interface Cliente {
    id: number;
    nome: string;
    idade: number;
    cpf: string;
    renda: number;
    estado: string;
}

export default function Clientes() {

    const [clientes, setClientes] = useState<Cliente[]>([]);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState("");

    useEffect(() => {
        async function buscarClientes() {
            try {
                const response = await fetch(
                    "http://localhost:3000/cliente"
                );

                if (!response.ok) {
                    throw new Error("Erro ao buscar clientes!");
                }

                const data: Cliente[] = await response.json();

                setClientes(data);

            } catch (error) {
                if (error instanceof Error) {
                    setErro(error.message);
                } else {
                    setErro("Erro desconhecido ao buscar clientes.");
                }
            } finally {
                setLoading(false);
            }
        }

        buscarClientes();
    }, []);

    if (loading) {
        return <p>Carregando clientes...</p>;
    }

    if (erro) {
        return <p>Erro: {erro}</p>;
    }

    return (
        <div>
            <h1>Clientes</h1>

            <ClientTable clientes={clientes} />
        </div>
    );
}