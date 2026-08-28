import LoanForm from "@/components/LoanForm";

export default function PessoalPage() {
    return (
        <main>
            <h1>Empréstimo Pessoal</h1>

            <p>
                Faça a análise de elegibilidade para
                empréstimo pessoal.
            </p>

            <p>
                <strong>Taxa de juros:</strong> 4%
            </p>

            <p>
                <strong>Tipo:</strong> PESSOAL
            </p>

            <LoanForm />
        </main>
    );
}