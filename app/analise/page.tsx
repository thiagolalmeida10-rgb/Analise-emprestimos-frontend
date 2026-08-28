import Link from "next/link";

export default function Analise() {
    return (
        <main className="min-h-screen bg-slate-100 px-6 py-12">
            <div className="mx-auto max-w-5xl">

                {/* Voltar */}
                <Link
                    href="/"
                    className="mb-6 inline-flex items-center text-sm font-semibold text-blue-600 transition hover:text-blue-800"
                >
                    ← Voltar para o início
                </Link>

                {/* Cabeçalho */}
                <header className="mb-10">
                    <span className="text-sm font-semibold uppercase tracking-wide text-orange-600">
                        Empréstimos
                    </span>

                    <h1 className="mt-1 text-3xl font-bold text-slate-900 sm:text-4xl">
                        Análise de Empréstimos
                    </h1>

                    <p className="mt-3 max-w-2xl text-slate-600">
                        Escolha o tipo de empréstimo para realizar a
                        análise de elegibilidade do cliente.
                    </p>
                </header>

                {/* Cards */}
                <section className="grid gap-6 md:grid-cols-3">

                    {/* Pessoal */}
                    <div className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg">
                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
                            👤
                        </div>

                        <h2 className="text-xl font-bold text-slate-900">
                            Empréstimo Pessoal
                        </h2>

                        <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-500">
                            Análise baseada na renda e no perfil
                            financeiro do cliente.
                        </p>

                        <div className="mt-5 rounded-xl bg-blue-50 p-3">
                            <p className="text-xs font-semibold uppercase tracking-wide text-blue-500">
                                Taxa de juros
                            </p>

                            <p className="mt-1 text-lg font-bold text-blue-700">
                                4%
                            </p>
                        </div>

                        <Link
                            href="/analise/pessoal"
                            className="mt-5 block rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
                        >
                            Analisar Pessoal →
                        </Link>
                    </div>

                    {/* Garantia */}
                    <div className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg">
                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-2xl">
                            🏠
                        </div>

                        <h2 className="text-xl font-bold text-slate-900">
                            Empréstimo com Garantia
                        </h2>

                        <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-500">
                            Análise considerando um bem oferecido
                            como garantia.
                        </p>

                        <div className="mt-5 rounded-xl bg-green-50 p-3">
                            <p className="text-xs font-semibold uppercase tracking-wide text-green-600">
                                Taxa de juros
                            </p>

                            <p className="mt-1 text-lg font-bold text-green-700">
                                3%
                            </p>
                        </div>

                        <Link
                            href="/analise/garantia"
                            className="mt-5 block rounded-xl bg-green-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-green-700"
                        >
                            Analisar com Garantia →
                        </Link>
                    </div>

                    {/* Consignado */}
                    <div className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg">
                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-2xl">
                            💳
                        </div>

                        <h2 className="text-xl font-bold text-slate-900">
                            Empréstimo Consignado
                        </h2>

                        <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-500">
                            Análise considerando a margem
                            consignável do cliente.
                        </p>

                        <div className="mt-5 rounded-xl bg-purple-50 p-3">
                            <p className="text-xs font-semibold uppercase tracking-wide text-purple-500">
                                Taxa de juros
                            </p>

                            <p className="mt-1 text-lg font-bold text-purple-700">
                                2%
                            </p>
                        </div>

                        <Link
                            href="/analise/consignado"
                            className="mt-5 block rounded-xl bg-purple-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-purple-700"
                        >
                            Analisar Consignado →
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    );
}