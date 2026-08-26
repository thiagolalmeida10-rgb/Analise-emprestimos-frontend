import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Bem-vindos</h1>

      <p>
        Sistema de Gerenciamento de Empréstimos
      </p>

      <div>
        <Link href="/clientes/novo">
          Cadastrar Cliente
        </Link>
        <br />

        <Link href="/clientes/id">
          Buscar ID
        </Link>
        <br />

        <Link href="/analise">
          Análise
        </Link>
      </div>
    </main>
  );
}