import LoanForm from "@/components/LoanForm";

export default function GarantiaPage() {
    return (
        <main>
            <h1>Empréstimo com Garantia</h1>

            <p>
                Faça a análise de elegibilidade para
                empréstimo com garantia.
            </p>

            <p>
                <strong>Taxa de juros:</strong> 3%
            </p>

            <p>
                <strong>Tipo:</strong> GARANTIA
            </p>

            <LoanForm />
        </main>
    );
}