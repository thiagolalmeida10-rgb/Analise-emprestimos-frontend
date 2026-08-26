import type { Emprestimo } from "@/types";

type LoanCardProps = {
  loan: Emprestimo;
};

export default function LoanCard({ loan }: LoanCardProps) {
  const valor = Number(loan.quantia);
  const taxa = Number(loan.taxaDeJuro);

  return (
    <article>
      <h2>Empréstimo #{loan.id}</h2>

      <p>
        <strong>Cliente:</strong> #{loan.clientId}
      </p>

      <p>
        <strong>Tipo:</strong> {loan.tipo}
      </p>

      <p>
        <strong>Valor:</strong>{" "}
        {valor.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>

      <p>
        <strong>Taxa de juros:</strong>{" "}
        {(taxa * 100).toFixed(2)}%
      </p>
    </article>
  );
}