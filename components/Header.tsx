import Link from "next/link";

export default function Header() {
    return (
        <header>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/clientes">Clientes</Link>
                <Link href="/clientes/novo">Novo Cliente</Link>
                <Link href="/clientes/id">Buscar ID</Link>
                <Link href="/analise">Análise</Link>
            </nav>
        </header>
    );
}