"use client";

import { useState } from "react";
import { criarEmprestimo } from "@/services/api";
import type { Emprestimo } from "@/types";
import LoanCard from "./LoanCard";

export default function LoanForm() {
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
        <section>
            <form onSubmit={analisarEmprestimo}>
                <div>
                    <label htmlFor="clientId">
                        ID do cliente
                    </label>

                    <input
                        id="clientId"
                        type="number"
                        value={clientId}
                        onChange={(e) =>
                            setClientId(e.target.value)
                        }
                        required
                    />
                </div>

                <div>
                    <label htmlFor="amount">
                        Valor do empréstimo
                    </label>

                    <input
                        id="amount"
                        type="number"
                        step="0.01"
                        value={amount}
                        onChange={(e) =>
                            setAmount(e.target.value)
                        }
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={carregando}
                >
                    {carregando
                        ? "Analisando..."
                        : "Analisar empréstimo"}
                </button>
            </form>

            {erro && (
                <p>{erro}</p>
            )}

            {loan && (
                <LoanCard loan={loan} />
            )}
        </section>
    );
}