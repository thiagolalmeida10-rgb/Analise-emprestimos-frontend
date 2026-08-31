import type { Emprestimo } from "@/types";

type LoanCardProps = {
  loan: Emprestimo;
};

export default function LoanCard({ loan }: LoanCardProps) {
  const valor = Number(loan.quantia);
  const taxa = Number(loan.taxaDeJuro);

  return (
    <article className="mt-6 rounded-2xl border border-slate-700 bg-slate-800 p-6 text-slate-100 shadow-xl shadow-slate-900/20">
      <h2 className="mb-5 border-b border-slate-500 pb-4 text-xl font-bold text-white">
        Empréstimo #{loan.id}
      </h2>

      <p className="border-b border-slate-500 py-3 text-slate-300">
        <strong className="text-slate-400">Cliente:</strong>{" "}
        #{loan.clientId}
      </p>

      <p className="border-b border-slate-500 py-3 text-slate-300">
        <strong className="text-slate-400">Tipo:</strong>{" "}
        {loan.tipo}
      </p>

      <p className="border-b border-slate-500 py-3 text-slate-300">
        <strong className="text-slate-400">Valor:</strong>{" "}
        <span className="font-semibold text-white">
          {valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </p>

      <p className="pt-3 text-slate-300">
        <strong className="text-slate-400">Taxa de juros:</strong>{" "}
        <span className="font-semibold text-emerald-400">
          {(taxa * 100).toFixed(2)}%
        </span>
      </p>
    </article>
  );
}