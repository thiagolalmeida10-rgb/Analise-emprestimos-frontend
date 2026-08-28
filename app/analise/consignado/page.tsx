import LoanForm from "@/components/LoanForm";

export default function ConsignadoPage() {
    return (
        <main>
            <h1>Empréstimo Consignado</h1>

            <p>
                Faça a análise de elegibilidade para
                empréstimo consignado.
            </p>

            <p>
                <strong>Taxa de juros:</strong> 2%
            </p>

            <p>
                <strong>Tipo:</strong> CONSIGNADO
            </p>

            <LoanForm />
        </main>
    );
}