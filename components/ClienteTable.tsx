interface Cliente {
    id: number;
    nome: string;
    idade: number;
    cpf: string;
    renda: number;
    estado: string;
}

interface ClientTableProps {
    clientes: Cliente[];
}

export default function ClientTable({
    clientes,
}: ClientTableProps) {
    if (clientes.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center px-6 py-12 text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-2xl">
                    👥
                </div>

                <h3 className="text-lg font-semibold text-slate-800">
                    Nenhum cliente encontrado
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                    Ainda não existem clientes cadastrados.
                </p>
            </div>
        );
    }

    return (
        <div className="overflow-x-auto">
            <table className="w-full min-w-700px border-collapse text-left">
                <thead>
                    <tr className="border-b border-slate-200 bg-slate-50">
                        <th className="px-5 py-4 text-sm font-semibold text-slate-600">
                            Nome
                        </th>

                        <th className="px-5 py-4 text-sm font-semibold text-slate-600">
                            Idade
                        </th>

                        <th className="px-5 py-4 text-sm font-semibold text-slate-600">
                            CPF
                        </th>

                        <th className="px-5 py-4 text-sm font-semibold text-slate-600">
                            Renda
                        </th>

                        <th className="px-5 py-4 text-sm font-semibold text-slate-600">
                            Estado
                        </th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                    {clientes.map((cliente) => (
                        <tr
                            key={cliente.id}
                            className="transition-colors hover:bg-blue-50"
                        >
                            <td className="px-5 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
                                        {cliente.nome
                                            .charAt(0)
                                            .toUpperCase()}
                                    </div>

                                    <div>
                                        <p className="font-semibold text-slate-800">
                                            {cliente.nome}
                                        </p>

                                        <p className="text-xs text-slate-400">
                                            ID #{cliente.id}
                                        </p>
                                    </div>
                                </div>
                            </td>

                            <td className="px-5 py-4 text-sm text-slate-600">
                                {cliente.idade} anos
                            </td>

                            <td className="px-5 py-4 font-mono text-sm text-slate-600">
                                {cliente.cpf}
                            </td>

                            <td className="px-5 py-4 text-sm font-semibold text-slate-800">
                                {Number(
                                    cliente.renda
                                ).toLocaleString("pt-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                })}
                            </td>

                            <td className="px-5 py-4">
                                <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                                    {cliente.estado}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}