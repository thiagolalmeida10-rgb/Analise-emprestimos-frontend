"use client";

import { useState } from "react";
import { criarEmprestimo } from "@/services/api";
import type { Emprestimo, TipoEmprestimo } from "@/types";
import LoanCard from "./LoanCard";

type LoanFormProps = {
    tipo: TipoEmprestimo;
};

export default function LoanForm({ tipo }: LoanFormProps) {
    const [clientId, setClientId] = useState("");
    const [amount, setAmount] = useState("");

    const [loan, setLoan] = useState<Emprestimo | null>(null);
    const [erro, setErro] = useState("");
    const [carregando, setCarregando] = useState(false);

    async function analisarEmprestimo(
        event: React.FormEvent<HTMLFormElement>
    ) {
        event.preventDefault();

        setErro("");
        setLoan(null);
        setCarregando(true);

        try {
            const emprestimo = await criarEmprestimo({
                clientId: Number(clientId),
                amount: Number(amount),
            });

            if (emprestimo.tipo !== tipo) {
                setErro(
                    `Este cliente não é elegível para o empréstimo ${tipo.toLowerCase()}.`
                );
                return;
            }

            setLoan(emprestimo);
        } catch (error) {
            if (error instanceof Error) {
                setErro(error.message);
            } else {
                setErro("Erro ao analisar empréstimo.");
            }
        } finally {
            setCarregando(false);
        }
    }

    return (
        <section className="w-full max-w-lg mx-auto">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                        Analisar empréstimo
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        Informe os dados abaixo para realizar uma análise.
                    </p>
                </div>

                <form
                    onSubmit={analisarEmprestimo}
                    className="space-y-5"
                >
                    <div>
                        <label
                            htmlFor="clientId"
                            className="mb-2 block text-sm font-medium text-slate-700"
                        >
                            ID do cliente
                        </label>

                        <input
                            id="clientId"
                            type="number"
                            value={clientId}
                            onChange={(e) =>
                                setClientId(e.target.value)
                            }
                            placeholder="Ex.: 123"
                            required
                            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="amount"
                            className="mb-2 block text-sm font-medium text-slate-700"
                        >
                            Valor do empréstimo
                        </label>

                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-500">
                                R$
                            </span>

                            <input
                                id="amount"
                                type="number"
                                step="0.01"
                                min="0"
                                value={amount}
                                onChange={(e) =>
                                    setAmount(e.target.value)
                                }
                                placeholder="0,00"
                                required
                                className="w-full rounded-xl border border-slate-300 bg-slate-50 py-3 pl-12 pr-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                            />
                        </div>
                    </div>

                    {erro && (
                        <div
                            role="alert"
                            className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                        >
                            <div className="flex items-start gap-2">
                                <span className="font-bold">!</span>
                                <p>{erro}</p>
                            </div>
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={carregando}
                        className="flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:bg-blue-400 disabled:shadow-none"
                    >
                        {carregando ? (
                            <>
                                <svg
                                    className="mr-2 h-5 w-5 animate-spin"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    />
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                    />
                                </svg>

                                Analisando...
                            </>
                        ) : (
                            "Analisar empréstimo"
                        )}
                    </button>
                </form>
            </div>

            {loan && (
                <div className="mt-6">
                    <LoanCard loan={loan} />
                </div>
            )}
        </section>
    );
}