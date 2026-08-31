import Link from "next/link";
import ClientForm from "@/components/ClienteForm";

export default function NovoCliente() {
    return (
        <main className="min-h-screen bg-slate-100 px-6 py-12">
            <div className="mx-auto max-w-2xl">

                <header className="mb-8">
                    <Link
                        href="/clientes"
                        className="mb-5 inline-flex items-center text-sm font-semibold text-blue-600 transition hover:text-blue-800"
                    >
                        ← Voltar para clientes
                    </Link>

                    <div>
                        <span className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                            Clientes
                        </span>

                        <h1 className="mt-1 text-3xl font-bold text-slate-900">
                            Novo Cliente
                        </h1>

                        <p className="mt-2 text-slate-600">
                            Cadastre um novo cliente no sistema.
                        </p>
                    </div>
                </header>

                <ClientForm />
            </div>
        </main>
    );
}