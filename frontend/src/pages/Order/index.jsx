import { TableOrder } from "../../components/Table";

export const Order = () => {
    const orders = [
        {id:1, user: "Dan", order: "Filé", value: 25.4, status: "Disponível" },
        {id:2, user: "Naum", order: "Salada", value: 15.0, status: "Aguardando" },
        {id:3, user: "Luiz", order: "Pizza", value: 40.9, status: "Entregue" },
        {id:4, user: "Weslaine", order: "Pizza", value: 40.9, status: "Entregue" }

    ];

    return (
        <TableOrder items={orders} />
    );
}