import { Container } from "./styles";

export function TransactionsTable() {
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de site</td>
                        <td className="deposit">R$ 5000,00</td>
                        <td>Desenvolvimento</td>
                        <td>02/05/2021</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de site</td>
                        <td className="withdraw">R$ 5000,00</td>
                        <td>Desenvolvimento</td>
                        <td>02/05/2021</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de site</td>
                        <td>-R$ 5000,00</td>
                        <td>Desenvolvimento</td>
                        <td>02/05/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}