import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react"

export const TableOrder = ({ items}) => {
    console.log(items)
    return (
        <TableContainer>
            <Table variant='simple' size='lg'>
                <TableCaption>Pedidos</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Usuário</Th>
                        <Th>Pedido</Th>
                        <Th isNumeric>Valor</Th>
                        <Th>Status</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {items.length > 0 ? (
                        items.map((item, index) => (
                            <Tr key={index}>
                                <Td>{item.user}</Td>
                                <Td>{item.order}</Td>
                                <Td isNumeric>R$ {item.value}</Td>
                                <Td>{item.status}</Td>
                            </Tr>
                        ))
                    ) : (
                        <Tr>
                            <Td colSpan="4">Nenhum pedido encontrado</Td>
                        </Tr>
                    )}
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th>Usuário</Th>
                        <Th>Pedido</Th>
                        <Th isNumeric>Valor</Th>
                        <Th>Status</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    );
}

