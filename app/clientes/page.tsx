"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
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
                    setErro(
                        "Erro desconhecido ao buscar clientes."
                    );
                }
            } finally {
                setLoading(false);
            }
        }

        buscarClientes();
    }, []);

    if (loading) {
        return (
            <main className="min-h-screen bg-slate-100 px-6 py-12">
                <div className="mx-auto max-w-6xl">
                    <div className="rounded-2xl bg-white p-10 text-center shadow-sm ring-1 ring-slate-200">
                        <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />

                        <p className="text-slate-600">
                            Carregando clientes...
                        </p>
                    </div>
                </div>
            </main>
        );
    }

    if (erro) {
        return (
            <main className="min-h-screen bg-slate-100 px-6 py-12">
                <div className="mx-auto max-w-6xl">
                    <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-red-700">
                        <h1 className="mb-2 text-xl font-bold">
                            Erro ao carregar clientes
                        </h1>

                        <p>{erro}</p>

                        <Link
                            href="/"
                            className="mt-5 inline-block rounded-lg bg-red-600 px-5 py-2 font-semibold text-white transition hover:bg-red-700"
                        >
                            Voltar para o início
                        </Link>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-slate-100 px-6 py-12">
            <div className="mx-auto max-w-6xl">

                {/* Cabeçalho */}
                <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <span className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                            Clientes
                        </span>

                        <h1 className="mt-1 text-3xl font-bold text-slate-900">
                            Clientes Cadastrados
                        </h1>

                        <p className="mt-2 text-slate-600">
                            Consulte os clientes cadastrados no sistema.
                        </p>
                    </div>

                    <Link
                        href="/clientes/novo"
                        className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md"
                    >
                        + Novo cliente
                    </Link>
                </header>

                {/* Resumo */}
                <section className="mb-6 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                        <p className="text-sm font-medium text-slate-500">
                            Total de clientes
                        </p>

                        <p className="mt-2 text-3xl font-bold text-slate-900">
                            {clientes.length}
                        </p>
                    </div>

                    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                        <p className="text-sm font-medium text-slate-500">
                            Estado mais comum
                        </p>

                        <p className="mt-2 text-2xl font-bold text-slate-900">
                            {clientes.length > 0
                                ? clientes.reduce(
                                      (estadoAtual, cliente) => {
                                          const quantidadeAtual =
                                              clientes.filter(
                                                  (item) =>
                                                      item.estado ===
                                                      estadoAtual
                                              ).length;

                                          const quantidadeCliente =
                                              clientes.filter(
                                                  (item) =>
                                                      item.estado ===
                                                      cliente.estado
                                              ).length;

                                          return quantidadeCliente >
                                              quantidadeAtual
                                              ? cliente.estado
                                              : estadoAtual;
                                      },
                                      clientes[0].estado
                                  )
                                : "-"}
                        </p>
                    </div>

                    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                        <p className="text-sm font-medium text-slate-500">
                            Renda média
                        </p>

                        <p className="mt-2 text-2xl font-bold text-slate-900">
                            {clientes.length > 0
                                ? (
                                      clientes.reduce(
                                          (total, cliente) =>
                                              total +
                                              Number(cliente.renda),
                                          0
                                      ) / clientes.length
                                  ).toLocaleString("pt-BR", {
                                      style: "currency",
                                      currency: "BRL",
                                  })
                                : "R$ 0,00"}
                        </p>
                    </div>
                </section>

                {/* Tabela */}
                <section className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
                    <div className="border-b border-slate-200 px-6 py-5">
                        <h2 className="text-lg font-bold text-slate-900">
                            Lista de clientes
                        </h2>

                        <p className="mt-1 text-sm text-slate-500">
                            Todos os clientes cadastrados atualmente.
                        </p>
                    </div>

                    <div className="overflow-x-auto p-4">
                        <ClientTable clientes={clientes} />
                    </div>
                </section>

                {/* Voltar */}
                <div className="mt-6">
                    <Link
                        href="/"
                        className="text-sm font-semibold text-blue-600 transition hover:text-blue-800"
                    >
                        ← Voltar para o início
                    </Link>
                </div>
            </div>
        </main>
    );
}