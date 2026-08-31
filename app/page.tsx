import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <header className="mb-12 text-center">
          <span className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
            Sistema Financeiro
          </span>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            Bem-vindos
          </h1>

          <p className="mt-3 text-lg text-slate-600">
            Sistema de Gerenciamento de Empréstimos
          </p>
        </header>

        <section>
          <h2 className="mb-6 text-2xl font-semibold text-slate-800">
            Menu
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <Link
              href="/clientes"
              className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl">
                👥
              </div>

              <h3 className="text-lg font-bold text-slate-900">
                Clientes
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Consulte todos os clientes cadastrados.
              </p>

              <span className="mt-5 block font-semibold text-blue-600 transition group-hover:text-blue-700">
                Mostrar clientes →
              </span>
            </Link>

            <Link
              href="/clientes/novo"
              className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl">
                ➕
              </div>

              <h3 className="text-lg font-bold text-slate-900">
                Novo cliente
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Cadastre um novo cliente no sistema.
              </p>

              <span className="mt-5 block font-semibold text-green-600 transition group-hover:text-green-700">
                Cadastrar cliente →
              </span>
            </Link>

            <Link
              href="/clientes/id"
              className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-2xl">
                🔎
              </div>

              <h3 className="text-lg font-bold text-slate-900">
                Buscar cliente
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Encontre um cliente pelo seu ID.
              </p>

              <span className="mt-5 block font-semibold text-purple-600 transition group-hover:text-purple-700">
                Buscar por ID →
              </span>
            </Link>

            <Link
              href="/analise"
              className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-2xl">
                💰
              </div>

              <h3 className="text-lg font-bold text-slate-900">
                Análise
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Analise a elegibilidade para empréstimos.
              </p>

              <span className="mt-5 block font-semibold text-orange-600 transition group-hover:text-orange-700">
                Fazer análise →
              </span>
            </Link>
          </div>
        </section>

        <footer className="mt-12 text-center text-sm text-slate-500">
          Sistema de Gerenciamento de Empréstimos
        </footer>
      </div>
    </main>
  );
}