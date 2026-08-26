import Link from "next/link"

export default function Analise(){
    return(
        <main>
            <h1>Análise de Empréstimos</h1>

            <p>Escolha o tipo de empréstimo para realizar a análise.</p>

            <section>
                <div>
                    <h2>Empréstimo Pessoal</h2>
                    <p>
                        Análise baseada na renda e no perfil financeiro do cliente.
                    </p>
                    <Link href="/analise/pessoal">
                        Analisar Pessoal
                    </Link>
                </div>

                <div>
                    <h2>Empréstimo Consignado</h2>
                    <p>
                        Análise considerando a margem consignável do cliente.
                    </p>
                    <Link href="/analise/consignado">
                        Analisar Consignado
                    </Link>
                </div>

                <div>
                    <h2>Empréstimo Com Garantia</h2>
                    <p>
                        Análise considerando um bem oferecido como garantia.
                    </p>
                    <Link href="/analise/garantia">
                        Analisar Com Garantia
                    </Link>
                </div>
            </section>
        </main>
    )
}