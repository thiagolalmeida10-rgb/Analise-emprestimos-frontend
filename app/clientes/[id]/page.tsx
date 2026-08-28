"use client";

import { useState } from "react";
import Link from "next/link";

interface Cliente {
    id: number;
    nome: string;
    idade: number;
    cpf: string;
    renda: number;
    estado: string;
}

export default function BuscarCliente() {
    const [id, setId] = useState("");
    const [cliente, setCliente] = useState<Cliente | null>(null);
    const [erro, setErro] = useState("");

    async function buscarCliente() {
        if (!id) {
            setErro("Digite o ID do cliente.");
            setCliente(null);
            return;
        }

        try {
            setErro("");
            setCliente(null);

            const response = await fetch(
                `http://localhost:3000/cliente/${id}`
            );

            if (!response.ok) {
                throw new Error("Cliente não encontrado!");
            }

            const data: Cliente = await response.json();
            setCliente(data);
        } catch (error) {
            if (error instanceof Error) {
                setErro(error.message);
            } else {
                setErro("Erro desconhecido!");
            }
        }
    }

    return (
        <main className="min-h-screen bg-slate-100 px-6 py-12">
            <div className="mx-auto max-w-2xl">

                {/* Voltar */}
                <Link
                    href="/clientes"
                    className="mb-6 inline-flex items-center text-sm font-semibold text-blue-600 transition hover:text-blue-800"
                >
                    ← Voltar para clientes
                </Link>

                {/* Cabeçalho */}
                <header className="mb-8">
                    <span className="text-sm font-semibold uppercase tracking-wide text-purple-600">
                        Clientes
                    </span>

                    <h1 className="mt-1 text-3xl font-bold text-slate-900">
                        Buscar Cliente
                    </h1>

                    <p className="mt-2 text-slate-600">
                        Consulte os dados de um cliente através do seu ID.
                    </p>
                </header>

                {/* Card de busca */}
                <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-2xl">
                        🔎
                    </div>

                    <h2 className="text-xl font-bold text-slate-900">
                        Consultar cliente
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        Informe o ID do cliente que deseja consultar.
                    </p>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                        <input
                            type="number"
                            min="1"
                            placeholder="Digite o ID"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    buscarCliente();
                                }
                            }}
                            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                        />

                        <button
                            onClick={buscarCliente}
                            className="rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-purple-700 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-purple-200"
                        >
                            Buscar
                        </button>
                    </div>

                    {/* Erro */}
                    {erro && (
                        <div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700">
                            ⚠ {erro}
                        </div>
                    )}
                </section>

                {/* Resultado */}
                {cliente && (
                    <section className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">

                        <div className="border-b border-slate-200 bg-green-50 px-6 py-5">
                            <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100 text-xl">
                                    ✓
                                </div>

                                <div>
                                    <h2 className="font-bold text-green-800">
                                        Cliente encontrado
                                    </h2>

                                    <p className="text-sm text-green-700">
                                        Cliente localizado com sucesso.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-5 p-6 sm:grid-cols-2">

                            {/* ID */}
                            <div className="rounded-xl bg-slate-50 p-4">
                                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                    ID
                                </p>

                                <p className="mt-1 text-lg font-bold text-slate-800">
                                    #{cliente.id}
                                </p>
                            </div>

                            {/* Nome */}
                            <div className="rounded-xl bg-slate-50 p-4">
                                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                    Nome
                                </p>

                                <p className="mt-1 font-semibold text-slate-800">
                                    {cliente.nome}
                                </p>
                            </div>

                            {/* Idade */}
                            <div className="rounded-xl bg-slate-50 p-4">
                                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                    Idade
                                </p>

                                <p className="mt-1 font-semibold text-slate-800">
                                    {cliente.idade} anos
                                </p>
                            </div>

                            {/* CPF */}
                            <div className="rounded-xl bg-slate-50 p-4">
                                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                    CPF
                                </p>

                                <p className="mt-1 font-mono font-semibold text-slate-800">
                                    {cliente.cpf}
                                </p>
                            </div>

                            {/* Renda */}
                            <div className="rounded-xl bg-slate-50 p-4">
                                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                    Renda mensal
                                </p>

                                <p className="mt-1 font-semibold text-slate-800">
                                    {Number(
                                        cliente.renda
                                    ).toLocaleString("pt-BR", {
                                        style: "currency",
                                        currency: "BRL",
                                    })}
                                </p>
                            </div>

                            {/* Estado */}
                            <div className="rounded-xl bg-slate-50 p-4">
                                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                    Estado
                                </p>

                                <span className="mt-1 inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                                    {cliente.estado}
                                </span>
                            </div>
                        </div>
                    </section>
                )}
            </div>
        </main>
    );
}