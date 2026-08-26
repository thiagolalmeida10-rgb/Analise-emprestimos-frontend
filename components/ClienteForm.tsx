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

export default function ClientForm() {
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [cpf, setCpf] = useState("");
    const [renda, setRenda] = useState("");
    const [estado, setEstado] = useState("");

    const [mensagem, setMensagem] = useState("");
    const [erro, setErro] = useState("");

    async function cadastrarCliente(
        event: React.FormEvent<HTMLFormElement>
    ) {
        event.preventDefault();

        setMensagem("");
        setErro("");

        const novoCliente = {
            nome,
            idade: Number(idade),
            cpf,
            renda: Number(renda),
            estado,
        };

        try {
            const response = await fetch(
                "http://localhost:3000/cliente",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(novoCliente),
                }
            );

            if (!response.ok) {
                throw new Error("Erro ao cadastrar cliente.");
            }

            const cliente: Cliente = await response.json();

            console.log("Cliente cadastrado:", cliente);

            setMensagem(
                `Cliente cadastrado com sucesso! ID: ${cliente.id}`
            );

            setNome("");
            setIdade("");
            setCpf("");
            setRenda("");
            setEstado("");

        } catch (error) {
            if (error instanceof Error) {
                setErro(error.message);
            } else {
                setErro("Erro desconhecido.");
            }
        }
    }

    return (
        <form onSubmit={cadastrarCliente}>

            <div>
                <label htmlFor="nome">
                    Nome
                </label>

                <input
                    id="nome"
                    type="text"
                    placeholder="Digite seu nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
            </div>

            <div>
                <label htmlFor="idade">
                    Idade
                </label>

                <input
                    id="idade"
                    type="number"
                    placeholder="Digite sua idade"
                    value={idade}
                    onChange={(e) => setIdade(e.target.value)}
                    required
                />
            </div>

            <div>
                <label htmlFor="cpf">
                    CPF
                </label>

                <input
                    id="cpf"
                    type="text"
                    placeholder="Digite seu CPF"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    required
                />
            </div>

            <div>
                <label htmlFor="renda">
                    Renda mensal
                </label>

                <input
                    id="renda"
                    type="number"
                    step="0.01"
                    placeholder="Digite sua renda"
                    value={renda}
                    onChange={(e) => setRenda(e.target.value)}
                    required
                />
            </div>

            <div>
                <label htmlFor="estado">
                    Estado
                </label>

                <input
                    id="estado"
                    type="text"
                    placeholder="Digite seu estado"
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                    required
                />
            </div>

            <button type="submit">
                Cadastrar cliente
            </button>

            {mensagem && (
                <p>{mensagem}</p>
            )}

            {erro && (
                <p>{erro}</p>
            )}

        </form>
    );
}