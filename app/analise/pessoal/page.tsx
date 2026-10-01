import LoanForm from "@/components/LoanForm";

export default function Pessoal() {
    return (
        <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                
                <div className="mb-10">
                    <div className="mb-3 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                        Empréstimo Pessoal
                    </div>

                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Analise seu empréstimo
                    </h1>

                    <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                        Faça uma análise de elegibilidade para descobrir
                        se você pode contratar um empréstimo pessoal.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-[1fr_480px] lg:items-start">
                    
                    <div className="space-y-6">
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <h2 className="text-lg font-semibold text-slate-900">
                                Sobre o empréstimo
                            </h2>

                            <p className="mt-2 text-sm leading-6 text-slate-500">
                                Preencha seus dados e o valor desejado.
                                Nossa análise verificará automaticamente
                                sua elegibilidade.
                            </p>

                            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                <div className="rounded-xl bg-blue-50 p-5">
                                    <p className="text-sm font-medium text-blue-600">
                                        Taxa de juros
                                    </p>

                                    <p className="mt-1 text-2xl font-bold text-blue-900">
                                        4%
                                    </p>
                                </div>

                                <div className="rounded-xl bg-slate-100 p-5">
                                    <p className="text-sm font-medium text-slate-500">
                                        Tipo
                                    </p>

                                    <p className="mt-1 text-2xl font-bold text-slate-900">
                                        PESSOAL
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                            <div className="flex gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                                    i
                                </div>

                                <div>
                                    <h3 className="font-semibold text-blue-900">
                                        Como funciona?
                                    </h3>

                                    <p className="mt-1 text-sm leading-6 text-blue-800">
                                        Informe o ID do cliente e o valor
                                        desejado. Após a análise, você
                                        verá o resultado da elegibilidade
                                        para o empréstimo.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <LoanForm tipo="PESSOAL"/>
                </div>
            </div>
        </main>
    );
}