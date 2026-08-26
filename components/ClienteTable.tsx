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

export default function ClientTable({ clientes }: ClientTableProps) {
    return (
        <>
            {clientes.length === 0 ? (
                <p>Nenhum cliente encontrado.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Idade</th>
                            <th>CPF</th>
                            <th>Renda</th>
                            <th>Estado</th>
                        </tr>
                    </thead>

                    <tbody>
                        {clientes.map((cliente) => (
                            <tr key={cliente.id}>
                                <td>{cliente.nome}</td>
                                <td>{cliente.idade}</td>
                                <td>{cliente.cpf}</td>
                                <td>
                                    {Number(cliente.renda).toLocaleString(
                                        "pt-BR",
                                        {
                                            style: "currency",
                                            currency: "BRL",
                                        }
                                    )}
                                </td>
                                <td>{cliente.estado}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
}