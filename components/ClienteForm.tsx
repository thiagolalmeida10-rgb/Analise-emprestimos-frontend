"use client";

import { useState } from "react";

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
                "https://analise-emprestimos-backend.onrender.com/cliente",
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
        <form
            onSubmit={cadastrarCliente}
            className="mx-auto w-full max-w-2xl rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8"
        >
            <div className="mb-8 border-b border-slate-200 pb-6">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl">
                    👤
                </div>

                <h2 className="text-2xl font-bold text-slate-900">
                    Cadastrar cliente
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                    Preencha os dados abaixo para cadastrar um novo
                    cliente.
                </p>
            </div>

            <div className="mb-5">
                <label
                    htmlFor="nome"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                >
                    Nome completo
                </label>

                <input
                    id="nome"
                    type="text"
                    placeholder="Digite o nome completo"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
                <div>
                    <label
                        htmlFor="idade"
                        className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                        Idade
                    </label>

                    <input
                        id="idade"
                        type="number"
                        min="1"
                        placeholder="Ex: 25"
                        value={idade}
                        onChange={(e) => setIdade(e.target.value)}
                        required
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />
                </div>

                <div>
                    <label
                        htmlFor="cpf"
                        className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                        CPF
                    </label>

                    <input
                        id="cpf"
                        type="text"
                        placeholder="Digite o CPF"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                        required
                        maxLength={11}
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />
                </div>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                    <label
                        htmlFor="renda"
                        className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                        Renda mensal
                    </label>

                    <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-400">
                            R$
                        </span>

                        <input
                            id="renda"
                            type="number"
                            min="0"
                            step="0.01"
                            placeholder="0,00"
                            value={renda}
                            onChange={(e) => setRenda(e.target.value)}
                            required
                            className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-4 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                        />
                    </div>
                </div>

                <div>
                    <label
                        htmlFor="estado"
                        className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                        Estado
                    </label>
                
                    <input
                        id="estado"
                        type="text"
                        placeholder="Digite o nome do estado"
                        value={estado}
                        onChange={(e) => setEstado(e.target.value)}
                        required
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />
                </div>
            </div>

            <button
                type="submit"
                className="mt-8 w-full rounded-xl bg-blue-600 px-5 py-3.5 font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-blue-200 active:scale-[0.99]"
            >
                Cadastrar cliente
            </button>

            {mensagem && (
                <div className="mt-5 rounded-xl border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-700">
                    ✓ {mensagem}
                </div>
            )}

            {erro && (
                <div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700">
                    ⚠ {erro}
                </div>
            )}
        </form>
    );
}